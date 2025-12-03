"use client";

import { Github, Linkedin, Twitter, ExternalLink, Heart } from "lucide-react";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/beimnetdemisew",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/beimnet-demisew-9b7ab3375/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Solutions",
    "Database Design",
    "API Development"
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Beimnet Demisew
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about creating modern, scalable
              web applications with clean code and exceptional user experiences.
            </p>
            <div className="flex space-x-4 items-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-slate-800 hover:bg-purple-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
              {/* Non-clickable icons (no links) */}
              <div className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg transition-all duration-300 transform flex items-center justify-center" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg transition-all duration-300 transform flex items-center justify-center" aria-label="Upwork">
                <SiUpwork className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-600 dark:text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>beimnetdemisew@gmail.com</p>
              <p>0967109871</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Beimnet Demisew. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using
              Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
