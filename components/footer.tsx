"use client";

import Link from "next/link";
import { Mail, MessageCircle, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-[#1A202C] text-white py-16 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Muslim Settify</h3>
            <p className="text-sm text-[#A0AEC0] leading-relaxed max-w-[300px]">
              Empowering Muslims worldwide to build sustainable, values-first careers through ethical appointment setting.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  onClick={(e) => handleLinkClick(e, "#features")}
                  className="text-sm text-[#A0AEC0] hover:text-white transition-colors duration-200"
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  href="#video-testimonials"
                  onClick={(e) => handleLinkClick(e, "#video-testimonials")}
                  className="text-sm text-[#A0AEC0] hover:text-white transition-colors duration-200"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, "#faq")}
                  className="text-sm text-[#A0AEC0] hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://form.typeform.com/to/ztBUiWgs?typeform-source=becomeasetter.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A0AEC0] hover:text-white transition-colors duration-200"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[#A0AEC0] hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[#A0AEC0] hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-sm text-[#A0AEC0] hover:text-white transition-colors duration-200"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact & Social */}
          <div>
            <h4 className="text-base font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A0AEC0] flex-shrink-0" />
                <a
                  href="mailto:support@muslimsettify.com"
                  className="text-sm text-[#A0AEC0] hover:text-white transition-colors duration-200"
                >
                  support@muslimsettify.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#A0AEC0] flex-shrink-0" />
                <span className="text-sm text-[#A0AEC0]">Contact us for inquiries</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/jamilkarabaev?igsh=MWVybXh5bzJhbzBvMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0AEC0] hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Jamilb2b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0AEC0] hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-[#A0AEC0]">
            © {new Date().getFullYear()} Muslim Settify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

