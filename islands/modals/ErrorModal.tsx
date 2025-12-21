/**
 * Error Modal
 * Displays API error messages to the user
 */

import Modal from "./Modal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

const translations = {
  de: {
    title: "Fehler",
    defaultMessage: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    close: "Schliessen",
    retry: "Erneut versuchen",
  },
  en: {
    title: "Error",
    defaultMessage: "An error occurred. Please try again.",
    close: "Close",
    retry: "Try Again",
  },
  fr: {
    title: "Erreur",
    defaultMessage: "Une erreur s'est produite. Veuillez réessayer.",
    close: "Fermer",
    retry: "Réessayer",
  },
};

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry?: () => void;
  message?: string;
  locale: Locale;
}

export default function ErrorModal({
  isOpen,
  onClose,
  onRetry,
  message,
  locale,
}: ErrorModalProps) {
  const t = translations[locale];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
      <div class="modal__icon modal__icon--error">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <p class="modal__message modal__message--error">
        {message || t.defaultMessage}
      </p>

      <div class="modal__actions">
        {onRetry && (
          <button
            type="button"
            class="btn btn--outline"
            onClick={onRetry}
          >
            {t.retry}
          </button>
        )}
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
