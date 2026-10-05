import Link from "next/link";

const letterParagraphs = [
  "I meant to write to you sooner. There were a dozen small moments when I thought of it: the kettle beginning to sing, a letterbox clapping shut in the wind, the last stripe of sunlight slipping down the wall. Each time I told myself I would sit down when the day was quieter. I am beginning to understand that quiet days do not arrive on their own. We have to make a little room for them.",
  "This morning, I took the long way to the shore. The tide was out, and the beach had that look it gets after a night of rain, all dark ribbons of seaweed and shining pools left between the stones. A dog ran ahead of its person, very serious about a piece of driftwood. I watched them until they became two small marks against the water, and for once I did not hurry after the next thought.",
  "Do you remember the old blue house at the end of the lane? Someone has finally painted the door. It is yellow now, a bright, impossible yellow that makes the whole house look as if it has just remembered something good. There are pots of rosemary on the steps, and a bicycle leaning against the gate. I do not know who lives there, but I have decided they must be happy. It is a comforting thing, to imagine happiness waiting behind an ordinary door.",
  "I have been keeping a list of things I want to tell you. It is written on the back of an envelope and tucked beneath the sugar bowl. The list is mostly unimportant: the bakery has started making plum cakes again; the clock in the station is still seven minutes slow; I found your old book on the shelf and there is a pressed flower between the pages. It has faded almost completely, but when I opened it, the room seemed to fill with the memory of that afternoon.",
  "Perhaps that is what I miss most—not one particular day, but the way time seemed to open when we were together. We could spend an entire afternoon doing nothing worth mentioning and still come away with the feeling that something had happened. We would talk, then stop talking. We would notice the clouds. You always knew when silence was asking to be left alone, and when it was asking someone to stay.",
  "I am learning that staying is its own kind of courage. It is easy to think a new beginning must be grand: a train pulled out of a station, a door flung open, a brave speech delivered at just the right moment. But most beginnings I have known were smaller. They were a cup set on the table for one more person. A curtain opened after a difficult week. A message written, erased, and written again until it finally sounded like the truth.",
  "So here is the truth, as simply as I can put it: I am glad you are in the world. I am glad there are places that remind me of you, and songs that make the walk home feel shorter, and memories that still know how to surprise me. Whatever the distance between one day and the next, I carry more light than I did before I knew you.",
  "The sun is going down now. From the window I can see the harbour lamps coming on, one by one, as if someone were carefully stitching the evening together. I will fold this letter before it gets too long, though I have already broken that promise. When you have a quiet moment, write back. Tell me something ordinary. Tell me what the light looked like where you were.",
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
            <p className="letter-date">A note for a slower afternoon</p>
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
            <p className="letter-signature">Someone thinking of you</p>
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
