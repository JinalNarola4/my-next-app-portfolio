import React from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Linkedin } from "lucide-react";


<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-300 bg-white shadow-sm">
        <div className="text-xl font-semibold">
          <span className="text-black">Jinal Narola</span>{" "}
          <span className="text-blue-600">/</span>{" "}
          <span className="uppercase text-sm text-gray-600 tracking-widest">
            Your Next Hire
          </span>
        </div>
        <nav className="space-x-6 text-sm text-gray-700">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col-reverse items-center justify-center py-16 px-4 text-center gap-10 md:flex-row md:text-left md:items-start md:px-20">
        <Card className="shadow-xl w-full max-w-sm bg-white">
          <CardContent className="flex flex-col items-center py-10">
            <img
              src="/profileimg.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-blue-500"
            />

            <h2 className="text-lg font-semibold text-gray-900">Jinal Narola</h2>
            <div className="h-0.5 w-10 bg-blue-600 my-2" />
            <p className="text-xs tracking-widest uppercase text-gray-500">
              Problem Solver @ Your Company
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </CardContent>
        </Card>

        <div className="max-w-xl">
          <p className="text-3xl font-bold text-gray-900 mt-10">
            Hi there, <span className="text-black">Jinal here</span>
          </p>
          <p className="mt-4 text-lg text-gray-700 font-poppins">
            A <span className="line-through">software engineer</span> passionate about crafting impactful digital solutions for clients around the globe.
          </p>
          <Button className="mt-6 px-6 py-2 border border-gray-600 bg-transparent text-gray-900 hover:bg-gray-100">
            Contact Me
          </Button>
        </div>
      </main>

      {/* Divider */}
      <div className="w-full h-10 bg-white" />

      {/* White Partition */}
      <div className="w-full bg-white py-6" />

      {/* About Me Section */}
      <section id="about" className="text-center py-12 px-4 sm:px-6 max-w-6xl mx-auto font-poppins">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          I'm a passionate <strong>Full Stack Developer</strong> with a knack for turning complex problems into simple, elegant digital solutions. With a solid foundation in <strong>React.js, Node.js, and MongoDB</strong>, I specialize in building scalable, responsive web applications that deliver real-world impact.
        </p>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          I enjoy working across the full stack—from crafting pixel-perfect frontends to architecting robust backend systems and APIs. I thrive in collaborative environments and believe in clean code, user-first design, and continuous learning.
        </p>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Beyond the code, I'm a curious learner, enthusiastic team player, and someone who values meaningful work that helps businesses and users alike. Let's build something incredible together!
        </p>

        <h3 className="text-xl text-gray-800 mt-16 mb-4 font-bold">
          Some Technologies I've Worked With
        </h3>
        <div className="w-full flex flex-wrap justify-center gap-6 mt-10">
          {["react", "nextdotjs", "node-dot-js", "express", "mongodb", "tailwindcss", "bootstrap", "git", "github", "firebase"].map((icon, index) => (
            <div key={index} className="flex flex-col items-center text-sm text-gray-700 hover:scale-105 transition-transform">
              <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg`} alt={icon} className="w-10 h-10 mb-2" />
              <span className="capitalize text-center">{icon.replace(/[-.]/g, " ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="text-center py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mt-10 mb-2">Projects I’ve Contributed To</h3>
        <ul className="text-gray-700 space-y-1">
          <li>- FWG </li>
          <li>- FGIIT </li>
        </ul>
      </section>

      {/* Experience Section */}

      <section id="experience" className="text-center py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-10">Experience</h3>
        <div className="grid md:grid-cols-2 gap-8 text-gray-800  font-poppins">
          <div className="bg-white shadow-md rounded-xl p-6 text-left transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-lg font-semibold mb-1">Full Stack Developer - Emerging Stack</h4>
            <p className="text-sm text-gray-600 mb-3">(10-2019 to Present)</p>
            <p className="text-gray-700">
              Currently working as a full stack developer building scalable web applications using React.js, Node.js, and MongoDB. Handling both frontend and backend development, API integrations, and deployment pipelines. Leading code reviews and mentoring junior developers.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-left transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-lg font-semibold mb-1">React JS Developer Intern - BVM Infotech</h4>
            <p className="text-sm text-gray-600 mb-3">3 Month Internship (7-2019 to 9-2019)</p>
            <p className="text-gray-700">
              Worked on developing responsive user interfaces using React.js. Collaborated with senior developers to implement dynamic components and enhance app performance. Participated in daily scrums, learned Git workflows, and contributed to client projects under agile methodologies.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-950 text-white py-12 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="mb-8 text-blue-200 italic">
            “I’d love to hear from you – let’s build something great together.”
          </p>
          <div className="space-y-2 text-blue-100">
            <p>
              Email: <a href="mailto:jinalnarola42@gmail.com" className="underline">jinalnarola42@gmail.com</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/JinalMeruliya" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/JinalMeruliya</a>
            </p>
            <p>
              Phone: <a href="tel:+16473859919" className="underline">+1 647 385-9919</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
