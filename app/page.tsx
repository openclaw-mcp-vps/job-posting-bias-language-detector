export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  const faqs = [
    {
      q: 'What kinds of bias does it detect?',
      a: 'It flags gendered words (e.g. "rockstar", "ninja"), ageist phrases (e.g. "digital native", "recent graduate"), and culturally exclusive language, then suggests neutral alternatives.'
    },
    {
      q: 'Do you store my job descriptions?',
      a: 'No. Analysis happens in-session and nothing is persisted to a database. Your data stays private.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel from your billing portal at any time with no questions asked and no cancellation fees.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          HR &amp; Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Remove Biased Language from<br />
          <span className="text-[#58a6ff]">Job Postings Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste any job description and instantly surface gendered, ageist, or culturally exclusive language — with inclusive alternatives that attract a wider, more diverse talent pool.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Demo preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-3">Example detection</p>
          <p className="text-sm text-[#c9d1d9] mb-4">
            We are looking for a{' '}
            <mark className="bg-red-900/60 text-red-300 rounded px-1">rockstar developer</mark>{' '}
            who is a{' '}
            <mark className="bg-red-900/60 text-red-300 rounded px-1">digital native</mark>{' '}
            and can work in a{' '}
            <mark className="bg-yellow-900/60 text-yellow-300 rounded px-1">fast-paced, aggressive</mark>{' '}
            environment.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-red-400 font-mono">rockstar developer</span><span className="text-[#8b949e]">→</span><span className="text-green-400">skilled developer</span></li>
            <li className="flex gap-2"><span className="text-red-400 font-mono">digital native</span><span className="text-[#8b949e]">→</span><span className="text-green-400">tech-savvy professional</span></li>
            <li className="flex gap-2"><span className="text-yellow-400 font-mono">aggressive</span><span className="text-[#8b949e]">→</span><span className="text-green-400">dynamic / results-driven</span></li>
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#58a6ff]/40 bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {['Unlimited job description scans','Gendered & ageist language detection','Inclusive alternative suggestions','Bias severity scoring','Copy-ready rewritten snippets'].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start for $11/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Job Posting Bias Detector. All rights reserved.
      </footer>
    </main>
  )
}
