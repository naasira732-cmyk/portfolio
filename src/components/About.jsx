import { useState } from "react";
import img from "../assets/About.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const renderContent = () => {
    if (activeTab === "mission") {
      return (
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          Our mission is to deliver high-quality digital solutions, build
          responsive websites, and help clients grow their businesses online
          using modern technologies like React and Tailwind CSS.
        </p>
      );
    }

    if (activeTab === "vision") {
      return (
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          Our vision is to become a leading digital agency providing modern,
          fast, and user-friendly web applications for global clients with
          excellent design and performance.
        </p>
      );
    }

    if (activeTab === "goal") {
      return (
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          Our goal is to satisfy clients, deliver professional projects on time,
          and continuously improve our skills in web development and UI/UX design.
        </p>
      );
    }
  };

  return (
    <div id="About" className="min-h-screen bg-white flex items-center px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-[#0f172a]">

          <p className="text-sm uppercase tracking-widest text-gray-500">
            About Mission
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
            Our Main Goal to Satisfied{" "}
            <span className="italic">local & Global Clients</span>
          </h1>

          {/* BUTTONS (TABS) */}
          <div className="flex gap-3 mt-6">

            <button
              onClick={() => setActiveTab("mission")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeTab === "mission"
                  ? "bg-[#0f172a] text-white"
                  : "border border-gray-300"
              }`}
            >
              Our Mission
            </button>

            <button
              onClick={() => setActiveTab("vision")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeTab === "vision"
                  ? "bg-[#0f172a] text-white"
                  : "border border-gray-300"
              }`}
            >
              Our Vision
            </button>

            <button
              onClick={() => setActiveTab("goal")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeTab === "goal"
                  ? "bg-[#0f172a] text-white"
                  : "border border-gray-300"
              }`}
            >
              Our Goal
            </button>

          </div>

          {/* CONTENT */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold capitalize">
              Our {activeTab}
            </h2>

            {renderContent()}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={img}
              alt="team"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;