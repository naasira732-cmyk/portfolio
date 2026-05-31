import '../index.css'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Modern and responsive portfolio website built using React and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      live: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Business App",
      description:
        "Business application with Tafsir, Audio Recitation and Search features.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "E-Commerce Store",
      description:
        "Full responsive online shopping website with modern UI design.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      live: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Dashboard System",
      description:
        "Admin dashboard with charts, analytics and user management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      live: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "Weather forecast application powered by API integration.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      live: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "Modern blogging platform with authentication and comments.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="Projects"
      className="min-h-screen bg-[#0f172a] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          My <span className="text-cyan-400">Projects</span>
        </h1>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Here are some projects that showcase my skills in React,
          JavaScript, Tailwind CSS and modern web development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 backdrop-blur-md border border-cyan-400/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-3 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-cyan-400">
                  {project.title}
                </h2>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-6">
                  <a
                    href={project.live}
                    className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;