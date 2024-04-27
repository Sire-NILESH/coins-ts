import { Link } from "react-router-dom";
import Brand from "../ui/Brand";

const footerLinks = [
  {
    name: "About",
    to: "/",
  },
  {
    name: "Licensing",
    to: "/",
  },
  {
    name: "Privacy Policy",
    to: "/",
  },
  {
    name: "Contact",
    to: "/",
  },
];

const Footer = () => {
  return (
    <footer className="border-border border-t">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="space-y-2 sm:flex sm:items-center sm:justify-between">
          <Brand />

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-foreground sm:mb-0">
            {footerLinks.map((link, i) => (
              <li>
                <Link
                  key={i}
                  to={link.to}
                  className="hover:underline me-4 md:me-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <span className="block text-sm text-foreground/70 sm:text-center">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            CrypTrack™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
