import '../index.css'
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen bg-[#0f172a] text-white px-6 py-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h1>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Have a project in mind? Let's work together.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* LEFT SIDE */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  Naasira732@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +252 77 127 0548
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Mogadishu, Somalia
                </p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-8 text-3xl">
              <a
                href="https://wa.me/252771270548"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-green-500 hover:scale-110 duration-300" />
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 duration-300" />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-blue-500 hover:scale-110 duration-300" />
              </a>

              <a href="mailto:Naasira732@gmail.com">
                <FaEnvelope className="text-red-500 hover:scale-110 duration-300" />
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            action="https://formsubmit.co/Naasira732@gmail.com"
            method="POST"
            className="bg-slate-900/60 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Message"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <div className="mb-5">
              <label className="block mb-2 text-gray-300">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-gray-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                required
                placeholder="Write your message..."
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;