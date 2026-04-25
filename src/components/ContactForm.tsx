import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const formspreeId = import.meta.env.PUBLIC_FORMSPREE_ID || '';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formspreeId) {
      setStatus('error');
      setErrorMsg('Form is not configured yet. Please WhatsApp us instead.');
      return;
    }

    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again or WhatsApp us.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or WhatsApp us.');
    }
  };

  return (
    <section className="bg-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-5 sm:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-pistachio">Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl text-deep-forest mt-3">Say hello</h2>
          <p className="mt-3 text-base text-sage-grey leading-relaxed">
            Questions, custom cake orders, or just saying hi — we'd love to hear from you.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-cream rounded-2xl p-8 text-center border border-wheat-beige/50">
            <div className="w-12 h-12 bg-pistachio/20 text-pistachio rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 className="font-display text-xl text-deep-forest">Message sent!</h3>
            <p className="mt-2 text-sm text-sage-grey">We'll get back to you as soon as we can.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-medium text-forest-green hover:underline underline-offset-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-6 sm:p-8 border border-wheat-beige/50 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-deep-forest mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-wheat-beige bg-off-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage-grey/60 focus:outline-none focus:ring-2 focus:ring-pistachio/50 hover-color"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-deep-forest mb-1.5">
                Phone or Email
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                className="w-full rounded-xl border border-wheat-beige bg-off-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage-grey/60 focus:outline-none focus:ring-2 focus:ring-pistachio/50 hover-color"
                placeholder="How can we reach you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-deep-forest mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border border-wheat-beige bg-off-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage-grey/60 focus:outline-none focus:ring-2 focus:ring-pistachio/50 transition-shadow resize-none"
                placeholder="What would you like to say?"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-terracotta">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-forest-green text-cream hover:bg-deep-forest hover-color disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-green"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
