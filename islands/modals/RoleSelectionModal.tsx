/**
 * Role Selection Modal
 * Lets user choose between investor or borrower role
 */

import Modal from "./Modal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

const translations = {
  de: {
    title: "Was möchten Sie tun?",
    message: "Bitte wählen Sie, wie Sie Cashare nutzen möchten.",
    invest: {
      title: "Anlegen",
      description: "Investieren Sie in Kredite und erzielen Sie attraktive Renditen.",
    },
    borrow: {
      title: "Kredit beantragen",
      description: "Beantragen Sie einen Privatkredit oder KMU-Kredit.",
    },
  },
  en: {
    title: "What would you like to do?",
    message: "Please choose how you want to use Cashare.",
    invest: {
      title: "Invest",
      description: "Invest in loans and earn attractive returns.",
    },
    borrow: {
      title: "Apply for a loan",
      description: "Apply for a personal or SME loan.",
    },
  },
  fr: {
    title: "Que souhaitez-vous faire?",
    message: "Veuillez choisir comment vous voulez utiliser Cashare.",
    invest: {
      title: "Investir",
      description: "Investissez dans des prêts et obtenez des rendements attractifs.",
    },
    borrow: {
      title: "Demander un crédit",
      description: "Demandez un crédit privé ou PME.",
    },
  },
};

interface RoleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectInvestor: () => void;
  onSelectBorrower: () => void;
  locale: Locale;
}

export default function RoleSelectionModal({
  isOpen,
  onClose,
  onSelectInvestor,
  onSelectBorrower,
  locale,
}: RoleSelectionModalProps) {
  const t = translations[locale];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t.title}>
      <p class="modal__message">{t.message}</p>

      <div class="modal__role-cards">
        <button
          type="button"
          class="modal__role-card"
          onClick={onSelectInvestor}
        >
          <div class="modal__role-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="modal__role-title">{t.invest.title}</h3>
          <p class="modal__role-desc">{t.invest.description}</p>
        </button>

        <button
          type="button"
          class="modal__role-card"
          onClick={onSelectBorrower}
        >
          <div class="modal__role-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 class="modal__role-title">{t.borrow.title}</h3>
          <p class="modal__role-desc">{t.borrow.description}</p>
        </button>
      </div>
    </Modal>
  );
}
