import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Job Posting Bias Detector – Write Inclusive Job Descriptions',
  description: 'Scan job descriptions for gendered, ageist, or culturally biased language and get inclusive alternatives to attract more diverse candidates.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3372cecf-cfc4-4893-9bf7-2da4cacbc257"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
