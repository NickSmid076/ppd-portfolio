import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Assignments", href: "/assignments" },
    { label: "Logbook", href: "/logbook" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-black/5 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">PPD Portfolio</h3>
            <p className="text-sm text-gray-600">
              Personal Professional Development portfolio showcasing my journey and growth.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Connect</h4>
            <p className="text-sm text-gray-600">Get in touch to learn more about my work.</p>
          </div>
        </div>

        {/* Bottom bar */}

        <div className="mt-8 border-t border-black/5 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} PPD Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
