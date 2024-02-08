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
    <footer className="bg-primary rounded-lg dark:bg-slate-900 border-gray-200 dark:border-gray-700 border-t">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="space-y-2 sm:flex sm:items-center sm:justify-between">
          <Brand />

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-secondary sm:mb-0">
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

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
