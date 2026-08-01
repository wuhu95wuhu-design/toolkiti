export default function NewsletterSignup() {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 text-center">
      <h3 className="mb-2 text-lg font-semibold">📬 Stay Updated</h3>
      <p className="mb-4 text-sm text-[var(--muted)]">
        Get weekly API updates, new tool listings, and AI industry insights.
      </p>
      <form className="mx-auto flex max-w-md gap-2" action="https://toolkiti.us22.list-manage.com/subscribe/post" method="POST" target="_blank">
        <input type="email" name="EMAIL" placeholder="your@email.com" required
          className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm outline-none focus:border-[var(--accent)]" />
        <button type="submit" className="rounded-lg bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
          Subscribe
        </button>
      </form>
      <p className="mt-2 text-[10px] text-[var(--muted)]">No spam. Unsubscribe anytime.</p>
    </div>
  );
}