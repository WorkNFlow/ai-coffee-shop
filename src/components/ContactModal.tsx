import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import ru from "../i18n/ru.json";
import en from "../i18n/en.json";

type Lang = "ru" | "en";
type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Pre-filled email subject, e.g. "Заказ зерна" */
  subject: string;
  lang?: Lang;
}

const translations = { ru, en };

export function ContactModal({
  isOpen,
  onClose,
  subject,
  lang = "ru",
}: ContactModalProps) {
  const t = translations[lang].modal;

  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when open, restore on close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-focus first field
      setTimeout(() => firstInputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset form state when modal opens for a new subject
  useEffect(() => {
    if (isOpen) {
      setFromName("");
      setFromEmail("");
      setMessage("");
      setStatus("idle");
    }
  }, [isOpen, subject]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "[EmailJS Error] Environment variables missing! Please check .env and restart dev server.",
        { serviceId, templateId, publicKey }
      );
      setStatus("error");
      return;
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          subject,
          from_name: fromName,
          from_email: fromEmail,
          to_email: fromEmail,
          reply_to: fromEmail,
          message,
        },
        { publicKey }
      );
      console.log("[EmailJS Success]", response);
      setStatus("success");
    } catch (err: any) {
      console.error("[EmailJS Error details]:", err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={subject}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Dim overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(2, 26, 53, 0.65)", backdropFilter: "blur(4px)" }}
      />

      {/* Modal panel */}
      <div
        className="relative w-full max-w-lg"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "1.25rem",
          boxShadow: "0 24px 64px rgba(2, 26, 53, 0.25)",
          padding: "2.5rem",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#74777e",
            lineHeight: 1,
          }}
          className="material-symbols-outlined hover:text-[#021a35] transition-colors duration-200"
        >
          close
        </button>

        {/* Subject as title */}
        <h2
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "32px",
            color: "#021a35",
            marginBottom: "0.5rem",
            paddingRight: "2rem",
          }}
        >
          {subject}
        </h2>
        <div
          style={{
            width: "3rem",
            height: "3px",
            backgroundColor: "#815500",
            borderRadius: "9999px",
            marginBottom: "1.75rem",
          }}
        />

        {/* ── Success state ── */}
        {status === "success" && (
          <div className="text-center py-6">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "56px", color: "#815500", display: "block", marginBottom: "1rem" }}
            >
              check_circle
            </span>
            <h3
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#021a35",
                marginBottom: "0.5rem",
              }}
            >
              {t.success_title}
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "16px",
                color: "#44474d",
                lineHeight: "24px",
                marginBottom: "1.5rem",
              }}
            >
              {t.success_text}
            </p>
            <button
              type="button"
              onClick={onClose}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#815500",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {t.close}
            </button>
          </div>
        )}

        {/* ── Form (idle / loading / error) ── */}
        {status !== "success" && (
          <form onSubmit={handleSubmit} noValidate>
            {/* Error banner */}
            {status === "error" && (
              <div
                style={{
                  backgroundColor: "#ffdad6",
                  borderRadius: "0.5rem",
                  padding: "0.75rem 1rem",
                  marginBottom: "1.25rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  color: "#93000a",
                  lineHeight: "20px",
                }}
              >
                {t.error_text}
              </div>
            )}

            {/* Name field */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="modal-name"
                style={{
                  display: "block",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "#44474d",
                  marginBottom: "0.5rem",
                }}
              >
                {t.name_label}
              </label>
              <input
                id="modal-name"
                ref={firstInputRef}
                type="text"
                required
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                placeholder={t.name_placeholder}
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid #c4c6ce",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "16px",
                  color: "#1b1c19",
                  backgroundColor: "#fbf9f4",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#815500")}
                onBlur={(e) => (e.target.style.borderColor = "#c4c6ce")}
              />
            </div>

            {/* Email field */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="modal-email"
                style={{
                  display: "block",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "#44474d",
                  marginBottom: "0.5rem",
                }}
              >
                {t.email_label}
              </label>
              <input
                id="modal-email"
                type="email"
                required
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                placeholder={t.email_placeholder}
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid #c4c6ce",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "16px",
                  color: "#1b1c19",
                  backgroundColor: "#fbf9f4",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#815500")}
                onBlur={(e) => (e.target.style.borderColor = "#c4c6ce")}
              />
            </div>

            {/* Message field */}
            <div style={{ marginBottom: "1.75rem" }}>
              <label
                htmlFor="modal-message"
                style={{
                  display: "block",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "#44474d",
                  marginBottom: "0.5rem",
                }}
              >
                {t.message_label}
              </label>
              <textarea
                id="modal-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.message_placeholder}
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid #c4c6ce",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "16px",
                  color: "#1b1c19",
                  backgroundColor: "#fbf9f4",
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#815500")}
                onBlur={(e) => (e.target.style.borderColor = "#c4c6ce")}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%",
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                border: "none",
                backgroundColor: status === "loading" ? "#c4c6ce" : "#021a35",
                color: "#ffffff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "background-color 0.2s, transform 0.15s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                if (status !== "loading")
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#815500";
              }}
              onMouseLeave={(e) => {
                if (status !== "loading")
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#021a35";
              }}
            >
              {status === "loading" && (
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid rgba(255,255,255,0.4)",
                    borderTopColor: "#ffffff",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
              )}
              {status === "loading" ? t.submitting : t.submit}
            </button>
          </form>
        )}
      </div>

      {/* Spinner keyframe — injected inline to avoid global CSS dependency */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
