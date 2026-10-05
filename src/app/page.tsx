"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";

const DEMO_CODE = "1723";

export default function Home() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) return;

    const submittedCode = code.trim();
    setError("");
    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);

      if (submittedCode === DEMO_CODE) {
        router.push("/studio");
      } else {
        setError("(¬_¬”). Try again.");
      }
    }, 1800);
  }

  return (
    <main className="gate-page">
      {isLoading ? (
        <div className="gate-loading" role="status" aria-live="polite">
          <video
            className="gate-loading-video"
            autoPlay
            loop
            muted
            playsInline
            poster="https://media.tenor.com/X7w636O0RDMAAAAN/rigby-cat-cat.png"
            aria-label="Rigby cat loading animation"
          >
            <source
              src="https://media.tenor.com/X7w636O0RDMAAAPo/rigby-cat-cat.mp4"
              type="video/mp4"
            />
            <source
              src="https://media.tenor.com/X7w636O0RDMAAAPs/rigby-cat-cat.webm"
              type="video/webm"
            />
          </video>
          <p>Hmmmmmmmmmm...</p>
        </div>
      ) : (
        <form className="gate-form" onSubmit={handleSubmit}>
          <label className="gate-label" htmlFor="access-code">
            Enter our number (˶˃ ᵕ ˂˶)
          </label>
          <div className={`gate-input-wrap${error ? " gate-input-error" : ""}`}>
            <input
              autoComplete="off"
              id="access-code"
              name="access-code"
              onChange={(event) => {
                setCode(event.target.value);
                if (error) setError("");
              }}
              placeholder="Input Code •⩊•"
              type="text"
              value={code}
              maxLength={4}
              aria-describedby={error ? "code-error" : undefined}
              aria-invalid={Boolean(error)}
            />
            <button type="submit" aria-label="Continue">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11m-4-4 4 4-4 4" />
              </svg>
            </button>
          </div>
          {error && (
            <p className="gate-error" id="code-error" role="alert">
              {error}
            </p>
          )}
        </form>
      )}
    </main>
  );
}
