/**
 * ModalButton — universal wrapper that reads the current language from
 * localStorage and renders an InteractiveHoverButton that opens ContactModal.
 *
 * Props
 *   subjectRu   — email subject in Russian
 *   subjectEn   — email subject in English
 *   labelRu     — button label in Russian
 *   labelEn     — button label in English
 *   variant     — "primary" | "secondary" | "white"  (default: "secondary")
 *   className   — extra Tailwind classes forwarded to the button
 */
import React, { useState, useEffect } from "react";
import { ContactModal } from "../ContactModal";
import { InteractiveHoverButton } from "./interactive-hover-button";

type Lang = "ru" | "en";

interface ModalButtonProps {
  subjectRu: string;
  subjectEn: string;
  labelRu: string;
  labelEn: string;
  variant?: "primary" | "secondary" | "white";
  className?: string;
}

export function ModalButton({
  subjectRu,
  subjectEn,
  labelRu,
  labelEn,
  variant = "secondary",
  className = "",
}: ModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("ru");

  // Read language from localStorage (key used by the site's i18n switcher)
  useEffect(() => {
    const stored = localStorage.getItem("bukhta-lang") as Lang | null;
    if (stored === "en" || stored === "ru") setLang(stored);

    // React to language switch events dispatched by the site's switcher
    const handleLangChange = (e: Event) => {
      const detail = (e as CustomEvent<{ lang: Lang }>).detail?.lang;
      if (detail === "en" || detail === "ru") setLang(detail);
    };
    window.addEventListener("langChange", handleLangChange);
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  const subject = lang === "en" ? subjectEn : subjectRu;
  const label   = lang === "en" ? labelEn   : labelRu;

  return (
    <>
      <InteractiveHoverButton
        text={label}
        variant={variant}
        className={className}
        onClick={() => setIsOpen(true)}
      />
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        subject={subject}
        lang={lang}
      />
    </>
  );
}
