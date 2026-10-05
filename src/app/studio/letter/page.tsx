import Link from "next/link";

const letterParagraphs = [
  "Hello my love, this is our 5th anniversary. 60 months, the day you let me in to your life, the day you trust me and the day you made the happiest guy in san juan city (lagi nalang kasi 'in the world  eh') I always remember this day where you finally chose me out of 3 candidates :> 11:42pm nakatingin ako sa phone ko, nakangiti, di ma alis yung excitement, di mapakali, dahil lang sa isang reply na 'na uto mo si thea e' I don't know if naalala mo pa yan. Pero guess what ako yung nauto mo.",
  "Actually, you really did trick me, my love. Because the way I look at you now makes me feel like if beauty had a voice, it would probably sound like yours. I used to think the moon was beautiful, until I saw the way your eyes could steal the light from it. I used to believe poetry was something written in books, until your smile turned even the most ordinary moments into something worth remembering. They say perfection doesn't exist, and maybe they're right. But every time you laugh, it feels like the whole world forgets its own flaws for a moment.",
  "And maybe that's what makes our love so special to me. It isn't because everything has always been perfect. We've been through so much times when we fought, times when things were difficult, moments when we didn't understand each other, and moments when we were happier than we could have ever imagined. But through all of those moments, through every high and every low, you're still the person I choose, every single day.",
  "I've never experienced a love like this before. A love that, no matter how messed up things get, somehow makes me want to find my way back to you. There are moments when things feel difficult, but deep down, I know that I don't want to walk away. I want to understand, to fix things, to grow with you, and to keep choosing you.",
  "And that's why I don't believe that we met by coincidence. I believe God placed you in my life for a reason. Maybe you were meant to be a blessing, maybe a lesson, or maybe both. Whatever the reason may be, I'm grateful that our paths crossed. Because out of all the people I could have met in this life, somehow, I found you and somehow, we found our way to each other.",
];

export default function StudioPage() {
  return (
    <main className="letter-page">
      <div className="letter-layout">
        <aside className="letter-photos letter-photos-left" aria-label="Decorative image placeholders">
          <figure className="letter-photo">
            <div className="letter-photo-art photo-one" role="img" aria-label="A photo from our memories" />
            <figcaption>LATE NIGHT CALLS</figcaption>
          </figure>
          <figure className="letter-photo">
            <div className="letter-photo-art photo-two" role="img" aria-label="A photo from our memories" />
            <figcaption>GALA</figcaption>
          </figure>
        </aside>

        <article className="letter">
          <Link className="letter-back-link" href="/studio">
            <span aria-hidden="true">←</span> Back to the beginning
          </Link>
          <header className="letter-header">
            <p className="letter-kicker">A LETTER FROM THE SHORE</p>
            <h1>The quiet things we carry</h1>
            <p className="letter-date">A little letter for the person who became home.</p>
            <div className="letter-rule" aria-hidden="true">
              <span />
            </div>
          </header>

          <div className="letter-body">
            <p className="letter-salutation">Dear you,</p>
            {letterParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="letter-signoff">Until the next quiet moment,</p>
            <p className="letter-signature">The one who will always find his way back to you.</p>
          </div>
          <Link className="letter-back-link letter-end-link" href="/studio">
            <span aria-hidden="true">←</span> Read from the beginning
          </Link>
        </article>

        <aside className="letter-photos letter-photos-right" aria-label="Decorative image placeholders">
          <figure className="letter-photo">
            <div className="letter-photo-art photo-three" role="img" aria-label="A photo from our memories" />
            <figcaption>ALWAYS YOURS IN EVERY UNIVERSE</figcaption>
          </figure>
          <figure className="letter-photo">
            <div className="letter-photo-art photo-four" role="img" aria-label="A photo from our memories" />
            <figcaption>LAB THIS ANGLE</figcaption>
          </figure>
        </aside>
      </div>
    </main>
  );
}
