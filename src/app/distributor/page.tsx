import { EnquiryForm } from "@/components/enquiry-form";
import { site } from "@/config/site";
export const metadata = { title: "Become a Distributor" };
export default function Page() {
  return (
    <>
      <section className="container page-heading">
        <span className="eyebrow">PARTNER WITH US</span>
        <h1>Bring Narain’s to your neighbourhood.</h1>
        <p>Tell us a little about your business and the places you serve.</p>
      </section>
      <section className="container section contact-grid">
        <aside>
          <h2>Good things grow together.</h2>
          <p>
            Explore a potential distribution partnership through this sample
            enquiry form.
          </p>
          <hr />
          <h3>Contact details</h3>
          <p>
            {site.email}
            <br />
            {site.phone}
          </p>
          <h3>Find us</h3>
          <p>{site.address}</p>
          <small>
            Demo details. Phone, WhatsApp and map links will be enabled when
            real information is added.
          </small>
        </aside>
        <EnquiryForm distributor={true} />
      </section>
    </>
  );
}
