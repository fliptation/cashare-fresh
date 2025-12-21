/**
 * Email Validation Modal
 * Shown after successful registration to prompt email verification
 */

import { useSignal } from "@preact/signals";
import Modal from "./Modal.tsx";
import { resendEmailValidation } from "../../lib/api/cashare.ts";
import { t, type Locale } from "../../lib/i18n/index.ts";

interface EmailValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  locale: Locale;
}

export default function EmailValidationModal({
  isOpen,
  onClose,
  email,
  locale,
}: EmailValidationModalProps) {
  const tr = (key: "emailValidationTitle" | "emailValidationMessage" | "emailValidationCheckInbox" | "emailValidationCheckSpam" | "emailValidationResend" | "emailValidationResending" | "emailValidationResent" | "emailValidationClose") => t(locale, "modals", key);
  const isResending = useSignal(false);
  const resendSuccess = useSignal(false);
  const resendError = useSignal("");

  const handleResend = async () => {
    isResending.value = true;
    resendError.value = "";
    resendSuccess.value = false;

    try {
      await resendEmailValidation(email);
      resendSuccess.value = true;
    } catch (err) {
      resendError.value = err instanceof Error ? err.message : "Error resending email";
    } finally {
      isResending.value = false;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={tr("emailValidationTitle")}>
      <div class="modal__icon modal__icon--email">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      <p class="modal__message">{tr("emailValidationMessage")}</p>
      <p class="modal__email">{email}</p>
      <p class="modal__hint">{tr("emailValidationCheckInbox")}</p>
      <p class="modal__hint modal__hint--secondary">{tr("emailValidationCheckSpam")}</p>

      {resendSuccess.value && (
        <p class="modal__success">{tr("emailValidationResent")}</p>
      )}

      {resendError.value && (
        <p class="modal__error">{resendError.value}</p>
      )}

      <div class="modal__actions">
        <button
          type="button"
          class="btn btn--outline"
          onClick={handleResend}
          disabled={isResending.value}
        >
          {isResending.value ? tr("emailValidationResending") : tr("emailValidationResend")}
        </button>
        <button
          type="button"
          class="btn btn--primary"
          onClick={onClose}
        >
          {tr("emailValidationClose")}
        </button>
      </div>
    </Modal>
  );
}
