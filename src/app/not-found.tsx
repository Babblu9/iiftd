import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[var(--color-brand-black)] text-center px-4">
      <div>
        <h1 className="font-heading text-8xl md:text-9xl text-[var(--color-gold)] font-bold mb-4 !text-glow">404</h1>
        <h2 className="text-3xl font-heading text-white mb-6">Page Content Pending</h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">This section is currently being updated and curated by the IIFTD administration team. Please check back later.</p>
        <Link href="/" className="btn-primary">
          <span className="relative z-10">Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
