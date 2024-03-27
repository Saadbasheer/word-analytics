export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label={"words"} />
      <Stat number={stats.numberOfCharecters} label={"Charecters"} />
      <Stat number={stats.instagramCharectersLeft} label={"Instagram"} />
      <Stat number={stats.facebookCharectersLeft} label={"Facebook"} />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0? "stat__number--limit" : ""}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
