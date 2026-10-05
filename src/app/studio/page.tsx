"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = value.trim();

    if (!prompt) {
      setError("Add a few words to see your preview.");
      return;
    }

    setError("");
    setResult(prompt);
  }

  function handleClear() {
    setValue("");
    setResult("");
    setError("");
  }

  return (
    <main className="studio-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <Link className="brand" href="/studio" aria-label="Canvas home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>canvas</span>
        </Link>

        <div className="sidebar-section">
          <p className="sidebar-label">WORKSPACE</p>
          <a className="nav-item nav-item-active" href="#studio">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <rect x="3" y="3" width="5" height="5" rx="1" />
              <rect x="12" y="3" width="5" height="5" rx="1" />
              <rect x="3" y="12" width="5" height="5" rx="1" />
              <rect x="12" y="12" width="5" height="5" rx="1" />
            </svg>
            <span>Studio</span>
          </a>
        </div>

        <div className="sidebar-note">
          <span className="note-sparkle" aria-hidden="true">✳</span>
          <p>A little space for your next big idea.</p>
        </div>

        <div className="profile">
          <div className="profile-avatar" aria-hidden="true">Y</div>
          <div>
            <p className="profile-name">Your workspace</p>
            <p className="profile-plan">Personal edition</p>
          </div>
          <span className="profile-menu" aria-hidden="true">···</span>
        </div>
      </aside>

      <section className="workspace" id="studio">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Workspace</span>
            <span className="breadcrumb-divider">/</span>
            <strong>Studio</strong>
          </div>
          <span className="saved-status">
            <span className="saved-dot" />
              Ready to explore
          </span>
        </header>

        <div className="studio-content">
          <div className="page-intro">
            <div className="intro-copy">
              <p className="eyebrow"><span /> YOUR IDEAS, IN FULL COLOR</p>
              <h1>Start with a thought.<br /><span>See where it goes.</span></h1>
              <p className="intro-description">
                Give your idea a name and watch your canvas come to life.
                No wrong answers, just room to explore.
              </p>
            </div>
            <div className="intro-doodle" aria-hidden="true">
              <span className="doodle-star">✳</span>
              <span className="doodle-line" />
              <span className="doodle-dot" />
            </div>
          </div>

          <div className="studio-grid">
            <section className="prompt-card" aria-labelledby="prompt-title">
              <div className="card-heading">
                <div className="step-number">01</div>
                <div>
                  <p className="section-kicker">THE FIRST LITTLE STEP</p>
                  <h2 id="prompt-title">What&apos;s on your mind?</h2>
                </div>
              </div>

              <p className="prompt-description">
                It could be a project, a plan, or just something you&apos;re
                curious about.
              </p>

              <form className="prompt-form" onSubmit={handleSubmit}>
                <label htmlFor="idea">Your idea</label>
                <div className={`input-wrap${error ? " input-wrap-error" : ""}`}>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 3.5v13M3.5 10h13" />
                  </svg>
                  <input
                    id="idea"
                    name="idea"
                    type="text"
                    placeholder="e.g. a cozy corner for book lovers"
                    value={value}
                    onChange={(event) => {
                      setValue(event.target.value);
                      if (error) setError("");
                    }}
                    maxLength={80}
                    aria-describedby={error ? "idea-error" : "idea-hint"}
                    aria-invalid={Boolean(error)}
                  />
                  <span className="character-count">{value.length}/80</span>
                </div>
                {error ? (
                  <p className="field-message field-error" id="idea-error" role="alert">
                    {error}
                  </p>
                ) : (
                  <p className="field-message" id="idea-hint">
                    Keep it short and sweet. You can always change it later.
                  </p>
                )}
                <button className="create-button" type="submit">
                  <span>Bring it to life</span>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h11m-4-4 4 4-4 4" />
                  </svg>
                </button>
              </form>

              <div className="card-footnote">
                <span aria-hidden="true">✦</span>
                Just for you. Nothing gets shared.
              </div>
            </section>

            <section className="preview-card" aria-labelledby="preview-title" aria-live="polite">
              <div className="preview-toolbar">
                <div className="preview-label">
                  <span className="preview-indicator" />
                  LIVE PREVIEW
                </div>
                {result && (
                  <button className="reset-button" type="button" onClick={handleClear}>
                    Start over
                  </button>
                )}
              </div>

              <div className={`preview-canvas${result ? " preview-canvas-ready" : ""}`}>
                <div className="canvas-decoration canvas-decoration-one" />
                <div className="canvas-decoration canvas-decoration-two" />
                {result ? (
                  <div className="result-content">
                    <div className="result-icon" aria-hidden="true">
                      <svg viewBox="0 0 32 32">
                        <path d="M16 3.5 19.3 12l8.7 4-8.7 3.3L16 28l-3.3-8.7L4 16l8.7-4L16 3.5Z" />
                      </svg>
                    </div>
                    <p className="result-overline">A FRESH CANVAS FOR</p>
                    <h2 id="preview-title">{result}</h2>
                    <p className="result-description">
                      Every great thing starts somewhere. This one starts right here.
                    </p>
                    <div className="result-divider" />
                    <div className="result-meta">
                      <span><i /> YOUR IDEA</span>
                      <span>JUST NOW</span>
                    </div>
                  </div>
                ) : (
                  <div className="empty-preview">
                    <div className="empty-illustration" aria-hidden="true">
                      <div className="illustration-paper">
                        <span className="paper-sun" />
                        <span className="paper-line paper-line-one" />
                        <span className="paper-line paper-line-two" />
                        <span className="paper-line paper-line-three" />
                      </div>
                      <span className="illustration-sparkle">✳</span>
                      <span className="illustration-dot" />
                    </div>
                    <h2 id="preview-title">Your next idea goes here</h2>
                    <p>It&apos;s looking a little blank. That&apos;s the fun part.</p>
                  </div>
                )}
              </div>

              <div className="preview-caption">
                <span>MADE TO CHANGE AS YOU DO</span>
                <span className="caption-mark" aria-hidden="true">✳</span>
              </div>
            </section>
          </div>

          <footer className="page-footer">
            <span>Made for curious minds.</span>
            <span>Take your time <span aria-hidden="true">↗</span></span>
          </footer>
        </div>
      </section>
    </main>
  );
}
