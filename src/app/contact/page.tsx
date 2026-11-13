import { EnquiryForm } from "@/components/enquiry-form";
import { site } from "@/config/site";
export const metadata = { title: "Contact Us" };
export default function Page() {
  return (
    <>
      <section className="container page-heading">
        <span className="eyebrow">SAY HELLO</span>
        <h1>Let’s start a conversation.</h1>
        <p>
          Questions, ideas, or just a hello. We would love to hear from you.
        </p>
      </section>
      <section className="container section contact-grid">
        <aside>
          <h2>A friendly place to begin.</h2>
          <p>Use the demo form to explore the contact experience.</p>
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
        <EnquiryForm distributor={false} />
      </section>
    </>
  );
}
