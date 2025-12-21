/**
 * Email Validation Modal
 * Shown after successful registration to prompt email verification
 */

import { useSignal } from "@preact/signals";
import Modal from "./Modal.tsx";
import { resendEmailValidation } from "../../lib/api/cashare.ts";
import type { Locale } from "../../lib/i18n/index.ts";

const translations = {
  de: {
    title: "E-Mail bestätigen",
    message: "Wir haben Ihnen eine E-Mail zur Bestätigung Ihrer Adresse gesendet.",
    checkInbox: "Bitte überprüfen Sie Ihren Posteingang und klicken Sie auf den Bestätigungslink.",
    checkSpam: "Überprüfen Sie auch Ihren Spam-Ordner.",
    resend: "E-Mail erneut senden",
    resending: "Wird gesendet...",
    resent: "E-Mail wurde erneut gesendet!",
    close: "Schliessen",
  },
  en: {
    title: "Confirm Your Email",
    message: "We've sent you an email to confirm your address.",
    checkInbox: "Please check your inbox and click the confirmation link.",
    checkSpam: "Also check your spam folder.",
    resend: "Resend Email",
    resending: "Sending...",
    resent: "Email resent successfully!",
    close: "Close",
  },
  fr: {
    title: "Confirmez votre e-mail",
    message: "Nous vous avons envoyé un e-mail pour confirmer votre adresse.",
    checkInbox: "Veuillez vérifier votre boîte de réception et cliquer sur le lien de confirmation.",
    checkSpam: "Vérifiez également votre dossier spam.",
    resend: "Renvoyer l'e-mail",
    resending: "Envoi en cours...",
    resent: "E-mail renvoyé avec succès!",
    close: "Fermer",
  },
};

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
  const t = translations[locale];
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
    <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
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

      <p class="modal__message">{t.message}</p>
      <p class="modal__email">{email}</p>
      <p class="modal__hint">{t.checkInbox}</p>
      <p class="modal__hint modal__hint--secondary">{t.checkSpam}</p>

      {resendSuccess.value && (
        <p class="modal__success">{t.resent}</p>
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
          {isResending.value ? t.resending : t.resend}
        </button>
        <button
          type="button"
          class="btn btn--primary"
          onClick={onClose}
        >
          {t.close}
        </button>
      </div>
    </Modal>
  );
}
