/**
 * Two-Factor Authentication Modal
 * Prompts user to enter 2FA code from authenticator app
 */

import { useSignal } from "@preact/signals";
import Modal from "./Modal.tsx";
import { t, type Locale } from "../../lib/i18n/index.ts";

interface TwoFactorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => Promise<void>;
  locale: Locale;
  error?: string;
}

export default function TwoFactorModal({
  isOpen,
  onClose,
  onSubmit,
  locale,
  error,
}: TwoFactorModalProps) {
  const tr = (key: "twoFactorTitle" | "twoFactorMessage" | "twoFactorPlaceholder" | "twoFactorSubmit" | "twoFactorSubmitting" | "twoFactorCancel" | "twoFactorError") => t(locale, "modals", key);
  const code = useSignal("");
  const isSubmitting = useSignal(false);
  const localError = useSignal("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (code.value.length !== 6) {
      localError.value = tr("twoFactorError");
      return;
    }

    isSubmitting.value = true;
    localError.value = "";

    try {
      await onSubmit(code.value);
    } catch (err) {
      localError.value = err instanceof Error ? err.message : tr("twoFactorError");
    } finally {
      isSubmitting.value = false;
    }
  };

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    // Only allow digits
    const value = target.value.replace(/\D/g, "").slice(0, 6);
    code.value = value;
    localError.value = "";
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={tr("twoFactorTitle")}>
      <div class="modal__icon modal__icon--2fa">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>

      <p class="modal__message">{tr("twoFactorMessage")}</p>

      <form onSubmit={handleSubmit} class="modal__form">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          class="modal__input modal__input--code"
          placeholder={tr("twoFactorPlaceholder")}
          value={code.value}
          onInput={handleInput}
          maxLength={6}
          autoFocus
        />

        {(error || localError.value) && (
          <p class="modal__error">{error || localError.value}</p>
        )}

        <div class="modal__actions">
          <button
            type="button"
            class="btn btn--outline"
            onClick={onClose}
            disabled={isSubmitting.value}
          >
            {tr("twoFactorCancel")}
          </button>
          <button
            type="submit"
            class="btn btn--primary"
            disabled={isSubmitting.value || code.value.length !== 6}
          >
            {isSubmitting.value ? tr("twoFactorSubmitting") : tr("twoFactorSubmit")}
          </button>
        </div>
      </form>
    </Modal>
  );
}
