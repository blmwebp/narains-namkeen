"use client";
import { useState } from "react";
import { categories } from "@/content/products";
export function EnquiryForm({
  distributor = false,
}: {
  distributor?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="enquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      onChange={() => setSubmitted(false)}
    >
      {/* <p className="sample-label">
        Demo form · No information is sent or saved.
      </p> */}
      <div className="form-grid">
        <label>
          Full name *
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        {distributor && (
          <label>
            Business / company name *
            <input
              name="company"
              autoComplete="organization"
              required
              maxLength={150}
            />
          </label>
        )}
        <label>
          Mobile number *
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            pattern="[+0-9 ()-]{10,18}"
            title="Enter 10–18 characters using digits, spaces, +, parentheses or hyphens."
          />
        </label>
        <label>
          Email {distributor ? "" : "*"}
          <input
            name="email"
            type="email"
            autoComplete="email"
            required={!distributor}
          />
        </label>
        {distributor && (
          <>
            <label>
              City *<input name="city" autoComplete="address-level2" required />
            </label>
            <label>
              State *
              <input name="state" autoComplete="address-level1" required />
            </label>
            <label>
              PIN code *
              <input
                name="pin"
                inputMode="numeric"
                autoComplete="postal-code"
                pattern="[0-9]{6}"
                title="Enter a six-digit PIN code"
                required
              />
            </label>
            <label>
              Business type *
              <select name="type" required defaultValue="">
                <option value="" disabled>
                  Select your business type
                </option>
                {["Distributor", "Wholesaler", "Retailer", "Other"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label>
              Years in business
              <input name="years" type="number" min="0" max="100" />
            </label>
            <label>
              Existing brands handled
              <input name="brands" />
            </label>
            <label className="full">
              Proposed distribution area
              <input name="area" />
            </label>
            <fieldset className="full">
              <legend>Interested product categories</legend>
              <div className="checks">
                {categories.map((c) => (
                  <label key={c}>
                    <input type="checkbox" name="categories" value={c} />
                    {c}
                  </label>
                ))}
              </div>
            </fieldset>
          </>
        )}
        <label className="full">
          Your message
          <textarea
            name="message"
            rows={4}
            required={!distributor}
            maxLength={2000}
          />
        </label>
      </div>
      <button className="button" type="submit">
        Submit Enquiry
      </button>
      <div role="status" className={submitted ? "success" : ""}>
        {submitted
          ? "Demo completed. Your enquiry has not been sent or saved."
          : ""}
      </div>
    </form>
  );
}
