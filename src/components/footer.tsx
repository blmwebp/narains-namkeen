import Link from "next/link";
export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <img
            className="footer-logo"
            src="/images/logo.png"
            width="170"
            height="105"
            alt="Narain’s Namkeen"
          />
          <p>
            Everyday moments.
            <br />
            Flavours worth sharing.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/products/">Our snacks</Link>
          <Link href="/recipes/">Recipes</Link>
          <Link href="/news/">Latest stories</Link>
        </div>
        <div>
          <h3>Get to know us</h3>
          <Link href="/our-story/">Our story</Link>
          <Link href="/quality/">Quality & care</Link>
          <Link href="/distributor/">Become a distributor</Link>
        </div>
        <div>
          <h3>Say hello</h3>
          <Link href="/contact/">Contact us ↗</Link>
          <p>
            hello@example.com
            <br />
            +91 XXXXX XXXXX
            <br />
            <small>Demo contact details</small>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Narain’s Namkeen · Design preview
        </span>
        {/* <Link href="/credits/">Image credits</Link> */}
        <Link href="/privacy/">Privacy</Link>
      </div>
      {/* <p className="demo-note">
        Demo catalogue, concept packaging and illustrative photography. Product
        details and company information require approval before launch.
      </p> */}
    </footer>
  );
}
