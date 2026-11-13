export const metadata = { title: "Quality & Care" };
export default function Page() {
  return (
    <>
      <section className="container page-heading">
        <span className="eyebrow">QUALITY & CARE</span>
        <h1>Care in the little things.</h1>
        <p>An illustrative journey from ingredients to the sharing bowl.</p>
      </section>
      <section className="container section">
        <p className="sample-label">
          These process descriptions are placeholders, not verified
          manufacturing claims.
        </p>
        <div className="process-grid">
          {[
            [
              "Ingredient selection",
              "Add approved sourcing and ingredient specifications here.",
            ],
            [
              "Preparation",
              "Describe your actual production and recipe controls.",
            ],
            [
              "Quality checks",
              "Document the verified checks and standards used by your team.",
            ],
            [
              "Packaging",
              "Explain the approved packaging and storage process.",
            ],
          ].map(([t, d], i) => (
            <div key={t}>
              <span className="process-number">0{i + 1}</span>
              <h2>{t}</h2>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="certificate">
          <h2>Certifications & documentation</h2>
          <p>
            Verified certificates will appear here once supplied. No
            certification is claimed in this demo.
          </p>
        </div>
      </section>
    </>
  );
}
