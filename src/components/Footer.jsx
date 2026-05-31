import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import '../index.css'
const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Naasir.dev
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Front-End Developer passionate about building modern,
              responsive and user-friendly web applications using
              React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#Home"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#Projects"
                  className="hover:text-cyan-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#Contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/25261XXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:youremail@gmail.com"
                className="hover:text-red-500 transition"
              >
                <FaEnvelope />
              </a>
            </div>

            <p className="text-gray-400 mt-4">
              Mogadishu, Somalia
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-400/10 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Naasir.dev. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;