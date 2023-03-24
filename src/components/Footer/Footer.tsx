import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-primary">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="text-white">&copy;2023 Public Library. All rights reserved</div>
        <nav>
          <ul className="flex items-center gap-4 text-2xl" aria-label="Social media links">
            <li>
              <Link
                to="/"
                target="_blank"
                className="text-white"
                rel="noopener"
                aria-label="Visit us on Facebook">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                target="_blank"
                className="text-white"
                rel="noopener"
                aria-label="Follow us on Twitter">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                target="_blank"
                className="text-white"
                rel="noopener"
                aria-label="Check our code on Github">
                <span className="sr-only">GitHub</span>
                <i className="fab fa-github"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
