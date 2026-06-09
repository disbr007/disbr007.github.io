import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="section-heading section-heading--wide">
        <p className="eyebrow">404</p>
        <h1>That page is not here.</h1>
        <p>
          Use the navigation to return to the home page or browse the projects.
        </p>
        <p>
          <Link href="/" className="text-link">
            Go home
          </Link>
        </p>
      </div>
    </main>
  );
}
