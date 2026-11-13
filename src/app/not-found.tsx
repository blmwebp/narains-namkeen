import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container section empty">
      <span className="eyebrow">404 · A LITTLE LOST?</span>
      <h1>
        Let’s get you back
        <br />
        to something tasty.
      </h1>
      <Link className="button" href="/products/">
        Explore our snacks ↗
      </Link>
    </div>
  );
}
