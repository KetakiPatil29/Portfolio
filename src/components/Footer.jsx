import { site } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} {site.name}. All rights reserved.</p>
    </footer>
  )
}