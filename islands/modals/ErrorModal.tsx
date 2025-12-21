/**
 * Error Modal
 * Displays API error messages to the user
 */

import Modal from "./Modal.tsx";
import { t, type Locale } from "../../lib/i18n/index.ts";

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
  const tr = (key: "errorTitle" | "errorDefaultMessage" | "errorClose" | "errorRetry") => t(locale, "modals", key);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={tr("errorTitle")}>
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
        {message || tr("errorDefaultMessage")}
      </p>

      <div class="modal__actions">
        {onRetry && (
          <button
            type="button"
            class="btn btn--outline"
            onClick={onRetry}
          >
            {tr("errorRetry")}
          </button>
        )}
        <button
          type="button"
          class="btn btn--primary"
          onClick={onClose}
        >
          {tr("errorClose")}
        </button>
      </div>
    </Modal>
  );
}
