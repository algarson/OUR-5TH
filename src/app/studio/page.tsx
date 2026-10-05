import Image from "next/image";
import Link from "next/link";
import { MusicControls } from "./music-player";

const memories = [
  {
    imageSrc: "/images/graduate001.png",
    title: "A thousand things to remember",
    description: "The small moments that somehow became the big ones.",
    number: "01",
  },
  {
    imageSrc: "/images/UnI003.png",
    title: "Your favorite kind of ordinary",
    description: "The small moments that somehow became the big ones.",
    number: "02",
  },

  {
    imageSrc: "/images/UnI007.png",
    title: "The days that felt like ours",
    description: "Little adventures, familiar places, and nowhere else to be.",
    number: "03",
  },
  {
    imageSrc: "/images/hehe004.png",
    title: "Still my favorite view",
    description: "The best part was always getting to see it with you.",
    number: "04",
  },
];

export default function StudioPage() {
  return (
    <main className="keepsake-page">
      <div className="keepsake-frame" aria-hidden="true" />

      <div className="keepsake-content">
        <header className="keepsake-heading">
          <p className="keepsake-kicker"><span /> A LITTLE COLLECTION OF US <span /></p>
          <h1>For all the days<br /><em>that became forever.</em></h1>
          <p className="keepsake-intro">
            Happy 5th Anniversary my love!
          </p>
          <span className="keepsake-flower" aria-hidden="true">✳</span>
        </header>

        <section className="keepsake-music" aria-labelledby="music-title">
          <div className="music-art" aria-hidden="true">
            <span className="music-art-center" />
          </div>
          <div className="music-card-copy">
            <p className="keepsake-section-label">· PLAY MY SONG FOR MY BB</p>
            <h2 id="music-title">BEFORE YOU</h2>
            <p>The song that can make anywhere feel a little like us.</p>
          </div>
          <MusicControls />
          <span className="music-sparkle" aria-hidden="true">✳</span>
        </section>

        <section className="memories-section" aria-labelledby="memories-title">
          <div className="section-heading">
            <div>
              <p className="keepsake-section-label">KEPT CLOSE, ALWAYS</p>
              <h2 id="memories-title">Little pieces of us</h2>
            </div>
            <span className="section-flourish" aria-hidden="true">✳</span>
          </div>

          <div className="memory-grid">
            {memories.map((memory) => (
              <article className="memory-envelope" key={memory.number}>
                <div className={`memory-photo ${memory.imageSrc ?? ""}`}>
                  {memory.imageSrc ? (
                    <Image
                      src={memory.imageSrc}
                      alt={memory.title}
                      fill
                      sizes="(max-width: 700px) 50vw, 25vw"
                      className="memory-photo-image"
                    />
                  ) : (
                    <span className="photo-placeholder-label">ADD PHOTO {memory.number}</span>
                  )}
                  <span className="photo-corner" aria-hidden="true" />
                </div>
                <div className="memory-copy">
                  <span className="memory-number">{memory.number}</span>
                  <h3>{memory.title}</h3>
                  <p>{memory.description}</p>
                </div>
                <span className="envelope-stamp" aria-hidden="true">♥</span>
              </article>
            ))}
          </div>
          <p className="photo-note">My favorite photos.</p>
        </section>

        <section className="anniversary-card" aria-labelledby="anniversary-title">
          <div className="anniversary-heading">
            <p className="keepsake-section-label">AND EVERY MOMENT IN BETWEEN</p>
            <h2 id="anniversary-title">Look how far we&apos;ve come</h2>
          </div>
          <div className="anniversary-stats">
            <div className="anniversary-stat">
              <span className="stat-number">5</span>
              <span className="stat-label">YEARS</span>
            </div>
            <span className="stat-divider" aria-hidden="true" />
            <div className="anniversary-stat">
              <span className="stat-number">1,825</span>
              <span className="stat-label">DAYS</span>
            </div>
            <span className="stat-divider" aria-hidden="true" />
            <div className="anniversary-stat">
              <span className="stat-number">43,800</span>
              <span className="stat-label">HOURS</span>
            </div>
            <span className="stat-divider" aria-hidden="true" />
            <div className="anniversary-stat">
              <span className="stat-number infinity-stat">∞</span>
              <span className="stat-label">MEMORIES</span>
            </div>
          </div>
          <span className="anniversary-heart" aria-hidden="true">♡</span>
        </section>

        <nav className="keepsake-next" aria-label="Continue to the letter">
          <span>ONE MORE THING</span>
          <Link href="/studio/letter">
            Turn the page <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
