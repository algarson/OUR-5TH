"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";

const DEMO_CODE = "1006";
const ACCESS_GRANTED_KEY = "our-5th-studio-access";

type AccessStatus = "checking" | "granted" | "locked" | "unavailable";

function getAccessStatus(): Exclude<AccessStatus, "checking"> {
  try {
    return window.localStorage.getItem(ACCESS_GRANTED_KEY) === "true"
      ? "granted"
      : "locked";
  } catch {
    return "unavailable";
  }
}

function subscribeToAccessStatus(callback: () => void) {
  function handleStorageChange(event: StorageEvent) {
    if (event.key === ACCESS_GRANTED_KEY || event.key === null) {
      callback();
    }
  }

  window.addEventListener("storage", handleStorageChange);
  return () => window.removeEventListener("storage", handleStorageChange);
}

function getServerAccessStatus(): AccessStatus {
  return "checking";
}

export default function Home() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const accessStatus = useSyncExternalStore(
    subscribeToAccessStatus,
    getAccessStatus,
    getServerAccessStatus,
  );

  useEffect(() => {
    if (accessStatus === "granted") {
      router.replace("/studio");
    }
  }, [accessStatus, router]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) return;

    const submittedCode = code.trim();
    setError("");
    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);

      if (submittedCode === DEMO_CODE) {
        try {
          window.localStorage.setItem(ACCESS_GRANTED_KEY, "true");
          router.replace("/studio");
        } catch {
          setError("Could not remember access. Please enable browser storage and try again.");
        }
      } else {
        setError("(¬_¬”). Try again.");
      }
    }, 1800);
  }

  const visibleError =
    error ||
    (accessStatus === "unavailable"
      ? "Browser storage is unavailable. Access can’t be remembered on this device."
      : "");

  return (
    <main className="gate-page">
      {accessStatus === "checking" || accessStatus === "granted" ? (
        <p role="status">Opening your keepsake...</p>
      ) : isLoading ? (
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
          <div className={`gate-input-wrap${visibleError ? " gate-input-error" : ""}`}>
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
              aria-describedby={visibleError ? "code-error" : undefined}
              aria-invalid={Boolean(visibleError)}
            />
            <button type="submit" aria-label="Continue">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11m-4-4 4 4-4 4" />
              </svg>
            </button>
          </div>
          {visibleError && (
            <p className="gate-error" id="code-error" role="alert">
              {visibleError}
            </p>
          )}
        </form>
      )}
    </main>
  );
}
