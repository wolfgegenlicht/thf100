"use client";
import { useState, useEffect } from "react";

const PASSWORD = "thf100";
const STORAGE_KEY = "thf100_auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  if (authed === null) return null;
  if (authed) return <>{children}</>;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "22rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              background: "var(--green)",
              marginBottom: "1.25rem",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "var(--text-body-sm)",
              marginTop: "0.25rem",
            }}
          >
            Diese Seite ist passwortgeschützt
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Passwort eingeben"
            autoFocus
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              border: error ? "1.5px solid #ef4444" : "1.5px solid #333",
              background: "#2a2a2a",
              color: "white",
              fontSize: "var(--text-body)",
              outline: "none",
            }}
          />
          {error && (
            <p style={{ color: "#ef4444", fontSize: "var(--text-caption)", margin: 0 }}>
              Falsches Passwort. Bitte erneut versuchen.
            </p>
          )}
          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Einloggen
          </button>
        </form>
      </div>
    </div>
  );
}
