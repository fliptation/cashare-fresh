/**
 * Two-Factor Authentication Modal
 * Prompts user to enter 2FA code from authenticator app
 */

import { useSignal } from "@preact/signals";
import Modal from "./Modal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

const translations = {
  de: {
    title: "Zwei-Faktor-Authentifizierung",
    message: "Bitte geben Sie den Code aus Ihrer Authenticator-App ein.",
    placeholder: "6-stelliger Code",
    submit: "Bestätigen",
    submitting: "Wird überprüft...",
    cancel: "Abbrechen",
    error: "Ungültiger Code. Bitte versuchen Sie es erneut.",
  },
  en: {
    title: "Two-Factor Authentication",
    message: "Please enter the code from your authenticator app.",
    placeholder: "6-digit code",
    submit: "Confirm",
    submitting: "Verifying...",
    cancel: "Cancel",
    error: "Invalid code. Please try again.",
  },
  fr: {
    title: "Authentification à deux facteurs",
    message: "Veuillez saisir le code de votre application d'authentification.",
    placeholder: "Code à 6 chiffres",
    submit: "Confirmer",
    submitting: "Vérification...",
    cancel: "Annuler",
    error: "Code invalide. Veuillez réessayer.",
  },
};

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
  const t = translations[locale];
  const code = useSignal("");
  const isSubmitting = useSignal(false);
  const localError = useSignal("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (code.value.length !== 6) {
      localError.value = t.error;
      return;
    }

    isSubmitting.value = true;
    localError.value = "";

    try {
      await onSubmit(code.value);
    } catch (err) {
      localError.value = err instanceof Error ? err.message : t.error;
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
    <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
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

      <p class="modal__message">{t.message}</p>

      <form onSubmit={handleSubmit} class="modal__form">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          class="modal__input modal__input--code"
          placeholder={t.placeholder}
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
            {t.cancel}
          </button>
          <button
            type="submit"
            class="btn btn--primary"
            disabled={isSubmitting.value || code.value.length !== 6}
          >
            {isSubmitting.value ? t.submitting : t.submit}
          </button>
        </div>
      </form>
    </Modal>
  );
}
