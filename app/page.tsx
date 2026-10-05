"use client";

import { useState } from "react";

type Lang = "de" | "en" | "it" | "es";

const members = [
  { name: "BloodyRose", role: "Feuer & Leidenschaft", image: "/bloodyrose.jpg", position: "center 25%" },
  { name: "IamXox", role: "Energie & Euphorie", image: "/iamxox.png", position: "center 18%" },
  { name: "KimLee_Darkside", role: "Charme & Magie", image: "/kimlee-darkside.png?v=20260801", position: "center 22%" },
  { name: "🐾⇺≾⊋VØⱠ₭ɆⱤ⊊≿⇻🐾", role: "Stärke & Loyalität", image: "/volker.png", position: "center 18%" },
];

const locations = [
  { name: "GER Danceparty", copy: "Neon. Bass. Ekstase.", image: "/ger-danceparty-club.jpg" },
  { name: "Black_Level", copy: "Dunkel. Elektrisch. Grenzenlos." },
  { name: "Blue Lagoon", copy: "Tropisch. Leuchtend. Frei.", image: "/blue-lagoon-dance-club.jpg" },
];

const translations = {
  de: { navTribe:"Der Stamm", navMemory:"Erinnerung", heroEye:"Wir feiern. Wir leben. Wir sind die Chaoten Bande.", heroA:"Nächte, die", heroB:"Geschichte schreiben.", lead:"Die Chaoten Bande bringt Menschen, Musik und magische Locations zusammen – mit großartigen DJs & DJanes und einer Community, die jede Nacht zu etwas Besonderem macht.", cta:"Entdecke unsere Welt", band:"Eine Bande", places:"Drei legendäre Orte", nights:"Unendliche Nächte", locEye:"Wo Chaos zu Magie wird", worlds:"Drei Welten.", feeling:"Ein Gefühl.", locCopies:["Neon. Bass. Ekstase.","Dunkel. Elektrisch. Grenzenlos.","Tropisch. Leuchtend. Frei."], body:"Ob pulsierender Dancefloor, futuristische Black-Level-Nacht oder tropische Blue Lagoon: Die Chaoten Bande ist Gastgeber für Partys, bei denen Beats verbinden, Freundschaften entstehen und der Alltag draußen bleibt. Unsere DJs & DJanes liefern den Soundtrack – ihr macht die Nacht legendär.", discordEye:"Bleib mit der Bande verbunden", discordA:"Komm auf unseren", discordB:"Discord-Server", discordCopy:"Triff die Chaoten Bande, erfahre von kommenden Partys und Locations und werde Teil unserer Community.", discordButton:"Discord-Server beitreten", tribeEye:"Das Herz jeder Nacht", tribeA:"Der Stamm der", tribeB:"Chaoten Bande", roles:["Feuer & Leidenschaft","Energie & Euphorie","Charme & Magie","Stärke & Loyalität"], tribeCopy:"Vier Namen, ein Herzschlag. Gemeinsam schaffen sie Räume voller Freiheit, Respekt, Musik und echter Verbundenheit. Wer einmal mit der Chaoten Bande gefeiert hat, bleibt nicht einfach Gast – sondern wird Teil der Geschichte.", memoryEye:"Für immer Teil unseres Sounds", memoryA:"In Erinnerung an", quote:"Manche Stimmen verstummen – doch ihre Melodie bleibt in unseren Herzen und in jeder Nacht, die wir gemeinsam feiern.", forever:"Unvergessen. Unendlich. Immer dabei.", footer:"Wir feiern. Wir leben. Wir sind die Chaoten Bande.", footerSmall:"Mit Herz, Bass und Erinnerung.", close:"Bild schließen", large:"groß anzeigen", noImage:"noch kein Bild vorhanden" },
  en: { navTribe:"The Crew", navMemory:"In Memory", heroEye:"We celebrate. We live. We are the Chaoten Bande.", heroA:"Nights that", heroB:"make history.", lead:"The Chaoten Bande brings people, music and magical locations together – with amazing DJs and a community that turns every night into something special.", cta:"Discover our world", band:"One crew", places:"Three legendary places", nights:"Endless nights", locEye:"Where chaos becomes magic", worlds:"Three worlds.", feeling:"One feeling.", locCopies:["Neon. Bass. Ecstasy.","Dark. Electric. Limitless.","Tropical. Luminous. Free."], body:"Whether a pulsating dance floor, a futuristic Black Level night or the tropical Blue Lagoon: the Chaoten Bande hosts parties where beats connect people, friendships begin and everyday life stays outside. Our DJs deliver the soundtrack – you make the night legendary.", discordEye:"Stay connected with the crew", discordA:"Join our", discordB:"Discord server", discordCopy:"Meet the Chaoten Bande, hear about upcoming parties and locations, and become part of our community.", discordButton:"Join the Discord server", tribeEye:"The heart of every night", tribeA:"The crew of the", tribeB:"Chaoten Bande", roles:["Fire & Passion","Energy & Euphoria","Charm & Magic","Strength & Loyalty"], tribeCopy:"Four names, one heartbeat. Together they create spaces filled with freedom, respect, music and genuine connection. Once you celebrate with the Chaoten Bande, you are no longer simply a guest – you become part of the story.", memoryEye:"Forever part of our sound", memoryA:"In memory of", quote:"Some voices fall silent – but their melody remains in our hearts and in every night we celebrate together.", forever:"Unforgotten. Infinite. Always with us.", footer:"We celebrate. We live. We are the Chaoten Bande.", footerSmall:"With heart, bass and remembrance.", close:"Close image", large:"show large", noImage:"no image available yet" },
  it: { navTribe:"Il gruppo", navMemory:"In ricordo", heroEye:"Festeggiamo. Viviamo. Siamo la Chaoten Bande.", heroA:"Notti che", heroB:"fanno la storia.", lead:"La Chaoten Bande unisce persone, musica e location magiche – con fantastici DJ e una community che rende speciale ogni notte.", cta:"Scopri il nostro mondo", band:"Un gruppo", places:"Tre luoghi leggendari", nights:"Notti infinite", locEye:"Dove il caos diventa magia", worlds:"Tre mondi.", feeling:"Un solo sentimento.", locCopies:["Neon. Bassi. Estasi.","Oscuro. Elettrico. Senza limiti.","Tropicale. Luminoso. Libero."], body:"Tra pista pulsante, notte futuristica al Black Level e la tropicale Blue Lagoon, la Chaoten Bande ospita feste in cui i beat uniscono, nascono amicizie e la vita quotidiana resta fuori. I nostri DJ creano la colonna sonora – voi rendete la notte leggendaria.", discordEye:"Resta connesso con il gruppo", discordA:"Entra nel nostro", discordB:"server Discord", discordCopy:"Incontra la Chaoten Bande, scopri le prossime feste e location ed entra nella nostra community.", discordButton:"Entra nel server Discord", tribeEye:"Il cuore di ogni notte", tribeA:"Il gruppo della", tribeB:"Chaoten Bande", roles:["Fuoco & Passione","Energia & Euforia","Fascino & Magia","Forza & Lealtà"], tribeCopy:"Quattro nomi, un solo battito. Insieme creano spazi pieni di libertà, rispetto, musica e legami autentici. Chi festeggia con la Chaoten Bande non resta un semplice ospite – diventa parte della storia.", memoryEye:"Per sempre parte del nostro sound", memoryA:"In ricordo di", quote:"Alcune voci tacciono – ma la loro melodia rimane nei nostri cuori e in ogni notte che festeggiamo insieme.", forever:"Indimenticabile. Infinito. Sempre con noi.", footer:"Festeggiamo. Viviamo. Siamo la Chaoten Bande.", footerSmall:"Con cuore, bassi e ricordo.", close:"Chiudi immagine", large:"mostra grande", noImage:"immagine non ancora disponibile" },
  es: { navTribe:"La banda", navMemory:"En memoria", heroEye:"Celebramos. Vivimos. Somos la Chaoten Bande.", heroA:"Noches que", heroB:"hacen historia.", lead:"La Chaoten Bande reúne personas, música y lugares mágicos, con DJs increíbles y una comunidad que convierte cada noche en algo especial.", cta:"Descubre nuestro mundo", band:"Una banda", places:"Tres lugares legendarios", nights:"Noches infinitas", locEye:"Donde el caos se vuelve magia", worlds:"Tres mundos.", feeling:"Un sentimiento.", locCopies:["Neón. Bajos. Éxtasis.","Oscuro. Eléctrico. Sin límites.","Tropical. Luminoso. Libre."], body:"Ya sea una pista vibrante, una noche futurista en Black Level o la tropical Blue Lagoon: la Chaoten Bande organiza fiestas donde los ritmos conectan, nacen amistades y la rutina queda fuera. Nuestros DJs ponen la banda sonora – vosotros hacéis legendaria la noche.", discordEye:"Sigue conectado con la banda", discordA:"Únete a nuestro", discordB:"servidor de Discord", discordCopy:"Conoce a la Chaoten Bande, descubre próximas fiestas y lugares y forma parte de nuestra comunidad.", discordButton:"Unirse al servidor de Discord", tribeEye:"El corazón de cada noche", tribeA:"La banda de", tribeB:"Chaoten Bande", roles:["Fuego & Pasión","Energía & Euforia","Encanto & Magia","Fuerza & Lealtad"], tribeCopy:"Cuatro nombres, un solo latido. Juntos crean espacios llenos de libertad, respeto, música y conexión auténtica. Quien celebra con la Chaoten Bande deja de ser un simple invitado y pasa a formar parte de la historia.", memoryEye:"Para siempre parte de nuestro sonido", memoryA:"En memoria de", quote:"Algunas voces se apagan, pero su melodía permanece en nuestros corazones y en cada noche que celebramos juntos.", forever:"Inolvidable. Infinito. Siempre con nosotros.", footer:"Celebramos. Vivimos. Somos la Chaoten Bande.", footerSmall:"Con corazón, bajos y recuerdo.", close:"Cerrar imagen", large:"mostrar grande", noImage:"imagen aún no disponible" },
} as const;

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[number] | null>(null);
  const [selectedMember, setSelectedMember] = useState<(typeof members)[number] | null>(null);
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang];

  return (
    <main>
      <nav className="nav" aria-label="Hauptnavigation">
        <a className="brand" href="#top">CHAOTEN<span>BANDE</span></a>
        <div className="navRight"><div className="navlinks">
          <a href="#locations">Locations</a>
          <a href="#discord">Discord</a>
          <a href="#stamm">{t.navTribe}</a>
          <a href="#memory">{t.navMemory}</a>
        </div><div className="languageSwitch" aria-label="Language">{(["de","en","it","es"] as Lang[]).map(code => <button type="button" key={code} className={lang === code ? "active" : ""} onClick={() => setLang(code)}>{code.toUpperCase()}</button>)}</div></div>
      </nav>

      <header className="hero" id="top">
        <div className="glow glowOne" />
        <div className="glow glowTwo" />
        <p className="eyebrow">{t.heroEye}</p>
        <h1>{t.heroA}<br /><em>{t.heroB}</em></h1>
        <p className="lead">{t.lead}</p>
        <a className="cta" href="#locations">{t.cta} <span>↓</span></a>
      </header>

      <section className="poster" aria-label="Chaotenbande Banner">
        <img
          src="/chaotenbande.jpg?v=20261005"
          alt="Chaotenbande – Dance Party, Black Level und Blue Lagoon"
        />
      </section>

      <section className="statement">
        <p>{t.band}</p>
        <span>♥</span>
        <p>{t.places}</p>
        <span>♥</span>
        <p>{t.nights}</p>
      </section>

      <section className="section locations" id="locations">
        <div className="sectionHeading">
          <p className="eyebrow">{t.locEye}</p>
          <h2>{t.worlds}<br />{t.feeling}</h2>
        </div>
        <div className="locationGrid">
          {locations.map((location, index) => (
            <button
              className={`locationCard card${index + 1}`}
              key={location.name}
              type="button"
              disabled={!location.image}
              onClick={() => location.image && setSelectedLocation(location)}
              aria-label={location.image ? `${location.name} ${t.large}` : `${location.name} – ${t.noImage}`}
            >
              <span>0{index + 1}</span>
              <div>
                <div className="locationTitle">
                  <span className="cbTag">CB</span>
                  <h3>{location.name}</h3>
                </div>
                <p>{t.locCopies[index]}</p>
              </div>
            </button>
          ))}
        </div>
        {selectedLocation?.image && (
          <figure className="locationPreview">
            <img src={selectedLocation.image} alt={`${selectedLocation.name} – großes Locationbild`} />
            <figcaption>
              <span><strong>{selectedLocation.name}</strong> · {t.locCopies[locations.indexOf(selectedLocation)]}</span>
              <button type="button" onClick={() => setSelectedLocation(null)}>{t.close}</button>
            </figcaption>
          </figure>
        )}
        <p className="bodyCopy">{t.body}</p>
      </section>

      <section className="discordSection" id="discord">
        <p className="eyebrow">{t.discordEye}</p>
        <h2>{t.discordA}<br /><em>{t.discordB}</em></h2>
        <p className="discordCopy">{t.discordCopy}</p>
        <a className="discordButton" href="https://discord.gg/CpmmsBNF3g" target="_blank" rel="noreferrer">
          {t.discordButton} <span>↗</span>
        </a>
      </section>

      <section className="section tribe" id="stamm">
        <div className="sectionHeading centered">
          <p className="eyebrow">{t.tribeEye}</p>
          <h2>{t.tribeA}<br /><em>{t.tribeB}</em></h2>
        </div>
        <div className="memberGrid">
          {members.map((member, index) => (
            <article className="member" key={member.name}>
              {member.image ? (
                <button
                  className="memberPhotoButton"
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  aria-label={`${member.name} ${t.large}`}
                >
                  <img
                    className="memberPhoto"
                    src={member.image}
                    alt={`Porträt von ${member.name}`}
                    style={{ objectPosition: member.position ?? "center" }}
                  />
                </button>
              ) : (
                <div className="avatar">{String(index + 1).padStart(2, "0")}</div>
              )}
              <h3>{member.name}</h3>
              <p>{t.roles[index]}</p>
            </article>
          ))}
        </div>
        {selectedMember && (
          <figure className="memberPreview">
            <img src={selectedMember.image} alt={`${selectedMember.name} – großes Porträt`} />
            <figcaption>
              <span><strong>{selectedMember.name}</strong> · {t.roles[members.indexOf(selectedMember)]}</span>
              <button type="button" onClick={() => setSelectedMember(null)}>{t.close}</button>
            </figcaption>
          </figure>
        )}
        <p className="tribeCopy">{t.tribeCopy}</p>
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
            <p className="eyebrow">{t.memoryEye}</p>
            <h2>{t.memoryA}<br /><em>SoundOfSilence</em></h2>
            <div className="line" />
            <blockquote>{t.quote}</blockquote>
            <p className="forever">{t.forever}</p>
          </div>
        </div>
      </section>

      <footer>
        <p className="brand">CHAOTEN<span>BANDE</span></p>
        <p>{t.footer}</p>
        <p className="small">{t.footerSmall}</p>
      </footer>
    </main>
  );
}
