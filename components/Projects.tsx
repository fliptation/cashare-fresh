import type { Locale } from "../lib/i18n/index.ts";
import { ButtonArrow } from "./ButtonArrow.tsx";

interface ProjectsProps {
  locale: Locale;
}

const content = {
  de: {
    label: "Investieren",
    title: "Aktuelle Projekte",
    subtitle:
      "Erstellen Sie Ihr individuelles Portfolio, indem Sie gezielt in einzelne Kredite investieren und ein diversifiziertes Portfolio aufbauen, die Ihren Kriterien entsprechen.",
    cta: "Zu den Projekten",
    ctaHref: "/projekte",
    interest: "Zins",
    rating: "Rating",
    loanType: "Darlehens Art",
    auctionNumber: "Auktions #",
    duration: "Laufzeit",
    timeLeft: "Übrige Zeit",
    progress: "Fortschritt",
  },
  en: {
    label: "Invest",
    title: "Current Projects",
    subtitle:
      "Build your individual portfolio by investing in selected loans and creating a diversified portfolio that meets your criteria.",
    cta: "View Projects",
    ctaHref: "/en/projects",
    interest: "Interest",
    rating: "Rating",
    loanType: "Loan Type",
    auctionNumber: "Auction #",
    duration: "Duration",
    timeLeft: "Time Left",
    progress: "Progress",
  },
  fr: {
    label: "Investir",
    title: "Projets actuels",
    subtitle:
      "Construisez votre portefeuille individuel en investissant dans des prêts sélectionnés et en créant un portefeuille diversifié qui répond à vos critères.",
    cta: "Voir les projets",
    ctaHref: "/fr/projets",
    interest: "Intérêt",
    rating: "Rating",
    loanType: "Type de prêt",
    auctionNumber: "Enchère #",
    duration: "Durée",
    timeLeft: "Temps restant",
    progress: "Progression",
  },
};

// Sample project data - in production this would come from an API
const sampleProjects = [
  {
    id: 20974,
    amount: "435'000 CHF",
    interest: "9 %",
    rating: "B",
    ratingColor: "#22c55e",
    loanType: "KMU",
    duration: "6 m",
    timeLeft: "4T 18H",
    progress: 40,
  },
  {
    id: 21023,
    amount: "280'000 CHF",
    interest: "9 %",
    rating: "B",
    ratingColor: "#22c55e",
    loanType: "KMU",
    duration: "6 m",
    timeLeft: "4T 18H",
    progress: 10.5,
  },
  {
    id: 21074,
    amount: "150'000 CHF",
    interest: "10.9 %",
    rating: "C",
    ratingColor: "#f59e0b",
    loanType: "PRIVAT",
    duration: "60 m",
    timeLeft: "14T 16H",
    progress: 11,
  },
  {
    id: 20998,
    amount: "320'000 CHF",
    interest: "8.5 %",
    rating: "B",
    ratingColor: "#22c55e",
    loanType: "KMU",
    duration: "12 m",
    timeLeft: "2T 8H",
    progress: 51.8,
  },
  {
    id: 21045,
    amount: "95'000 CHF",
    interest: "11.2 %",
    rating: "C",
    ratingColor: "#f59e0b",
    loanType: "PRIVAT",
    duration: "48 m",
    timeLeft: "6T 12H",
    progress: 100,
  },
  {
    id: 21089,
    amount: "180'000 CHF",
    interest: "7.8 %",
    rating: "A",
    ratingColor: "#16a34a",
    loanType: "KMU",
    duration: "24 m",
    timeLeft: "8T 4H",
    progress: 25,
  },
];

export function Projects({ locale }: ProjectsProps) {
  const t = content[locale];

  return (
    <section class="projects">
      <div class="projects__container">
        <div class="projects__header">
          <span class="projects__label">{t.label}</span>
          <h2 class="projects__title">{t.title}</h2>
          <p class="projects__subtitle">{t.subtitle}</p>
        </div>

        <div class="projects__grid">
          {sampleProjects.map((project) => (
            <article class="project-card" key={project.id}>
              {/* Card Header with Rating Badge and Amount */}
              <div class="project-card__header">
                <div
                  class="project-card__rating"
                  style={{ backgroundColor: project.ratingColor }}
                >
                  {project.rating}
                </div>
                <div class="project-card__amount-wrapper">
                  <span class="project-card__amount">
                    {project.amount.split(" ")[0]}
                  </span>
                  <span class="project-card__currency">CHF</span>
                </div>
              </div>

              {/* Key Metrics - Highlighted */}
              <div class="project-card__metrics">
                <div class="project-card__metric">
                  <span class="project-card__metric-value project-card__metric-value--interest">
                    {project.interest}
                  </span>
                  <span class="project-card__metric-label">{t.interest}</span>
                </div>
                <div class="project-card__metric">
                  <span class="project-card__metric-value">
                    {project.duration}
                  </span>
                  <span class="project-card__metric-label">{t.duration}</span>
                </div>
              </div>

              {/* Divider */}
              <div class="project-card__divider"></div>

              {/* Details */}
              <div class="project-card__details">
                <div class="project-card__row">
                  <span class="project-card__label">{t.loanType}</span>
                  <span
                    class={`project-card__badge ${
                      project.loanType === "KMU"
                        ? "project-card__badge--kmu"
                        : "project-card__badge--privat"
                    }`}
                  >
                    {project.loanType}
                  </span>
                </div>
                <div class="project-card__row">
                  <span class="project-card__label">{t.auctionNumber}</span>
                  <span class="project-card__value project-card__value--mono">
                    #{project.id}
                  </span>
                </div>
                <div class="project-card__row">
                  <span class="project-card__label">{t.timeLeft}</span>
                  <span class="project-card__value project-card__value--time">
                    <svg
                      class="project-card__time-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M8 4v4l2.5 2.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    {project.timeLeft}
                  </span>
                </div>
              </div>

              {/* Progress Section */}
              <div class="project-card__progress-section">
                <div class="project-card__progress-header">
                  <span class="project-card__progress-label">{t.progress}</span>
                  <span class="project-card__progress-value">
                    {project.progress}%
                  </span>
                </div>
                <div class="project-card__progress">
                  <div
                    class="project-card__progress-bar"
                    style={{
                      width: `${Math.min(project.progress, 100)}%`,
                      backgroundColor: project.progress >= 100
                        ? "#f59e0b"
                        : "#22c55e",
                    }}
                  />
                </div>
              </div>

              {/* Hover CTA */}
              <div class="project-card__cta">
                <span>Details ansehen</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  class="project-card__cta-arrow"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>

        <div class="projects__footer">
          <a href={t.ctaHref} class="btn btn--dark btn--with-arrow">
            {t.cta}
            <ButtonArrow />
          </a>
        </div>
      </div>
    </section>
  );
}
