const members = [
  { name: "Mr_BlackAngel", role: "Herz & Haltung", image: "/mr-blackangel.png" },
  { name: "Mrs_BlackAngel", role: "Glanz & Gefühl", image: "/mrs-blackangel.png" },
  { name: "BloodyRose", role: "Feuer & Leidenschaft" },
  { name: "IamXox", role: "Energie & Euphorie" },
];

const locations = [
  ["GER Dancearty", "Neon. Bass. Ekstase."],
  ["Black_Level", "Dunkel. Elektrisch. Grenzenlos."],
  ["Black Taverne", "Mystisch. Wild. Unvergesslich."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Hauptnavigation">
        <a className="brand" href="#top">CHAOTEN<span>BANDE</span></a>
        <div className="navlinks">
          <a href="#locations">Locations</a>
          <a href="#stamm">Der Stamm</a>
          <a href="#memory">Erinnerung</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="glow glowOne" />
        <div className="glow glowTwo" />
        <p className="eyebrow">Wir feiern. Wir leben. Wir sind die Chaoten Bande.</p>
        <h1>Nächte, die<br /><em>Geschichte schreiben.</em></h1>
        <p className="lead">
          Die Chaoten Bande bringt Menschen, Musik und magische Locations
          zusammen – mit großartigen DJs & DJanes und einer Community, die jede
          Nacht zu etwas Besonderem macht.
        </p>
        <a className="cta" href="#locations">Entdecke unsere Welt <span>↓</span></a>
      </header>

      <section className="poster" aria-label="Chaotenbande Banner">
        <img
          src="/chaotenbande.png"
          alt="Chaotenbande – Clubs, Black Level und Black Taverne"
        />
      </section>

      <section className="statement">
        <p>Eine Bande</p>
        <span>♥</span>
        <p>Drei legendäre Orte</p>
        <span>♥</span>
        <p>Unendliche Nächte</p>
      </section>

      <section className="section locations" id="locations">
        <div className="sectionHeading">
          <p className="eyebrow">Wo Chaos zu Magie wird</p>
          <h2>Drei Welten.<br />Ein Gefühl.</h2>
        </div>
        <div className="locationGrid">
          {locations.map(([name, copy], index) => (
            <article className={`locationCard card${index + 1}`} key={name}>
              <span>0{index + 1}</span>
              <div>
                <div className="locationTitle">
                  <span className="cbTag">CB</span>
                  <h3>{name}</h3>
                </div>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="bodyCopy">
          Ob pulsierender Dancefloor, futuristische Black-Level-Nacht oder
          düster-gemütliche Taverne: Die Chaoten Bande ist Gastgeber für Partys,
          bei denen Beats verbinden, Freundschaften entstehen und der Alltag
          draußen bleibt. Unsere DJs & DJanes liefern den Soundtrack – ihr macht
          die Nacht legendär.
        </p>
      </section>

      <section className="section tribe" id="stamm">
        <div className="sectionHeading centered">
          <p className="eyebrow">Das Herz jeder Nacht</p>
          <h2>Der Stamm der<br /><em>Chaoten Bande</em></h2>
        </div>
        <div className="memberGrid">
          {members.map((member, index) => (
            <article className="member" key={member.name}>
              {member.image ? (
                <img className="memberPhoto" src={member.image} alt={`Porträt von ${member.name}`} />
              ) : (
                <div className="avatar">{String(index + 1).padStart(2, "0")}</div>
              )}
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
        <p className="tribeCopy">
          Vier Namen, ein Herzschlag. Gemeinsam schaffen sie Räume voller
          Freiheit, Respekt, Musik und echter Verbundenheit. Wer einmal mit der
          Chaoten Bande gefeiert hat, bleibt nicht einfach Gast – sondern wird
          Teil der Geschichte.
        </p>
      </section>

      <section className="memory" id="memory">
        <div className="memoryInner">
          <figure className="memoryPhoto">
            <img
              src="/soundofsilence-memory.png"
              alt="Erinnerungsbild für SoundOfSilence bei Sonnenuntergang"
            />
          </figure>
          <div className="memoryCopy">
            <div className="memoryMark">∞</div>
            <p className="eyebrow">Für immer Teil unseres Sounds</p>
            <h2>In Erinnerung an<br /><em>SoundOfSilence</em></h2>
            <div className="line" />
            <blockquote>
              Manche Stimmen verstummen – doch ihre Melodie bleibt in unseren
              Herzen und in jeder Nacht, die wir gemeinsam feiern.
            </blockquote>
            <p className="forever">Unvergessen. Unendlich. Immer dabei.</p>
          </div>
        </div>
      </section>

      <footer>
        <p className="brand">CHAOTEN<span>BANDE</span></p>
        <p>Wir feiern. Wir leben. Wir sind die Chaoten Bande.</p>
        <p className="small">Mit Herz, Bass und Erinnerung.</p>
      </footer>
    </main>
  );
}
