'use client';
import React from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Linkedin } from "lucide-react";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen text-gray-800 overflow-x-hidden font-poppins">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-300 bg-white shadow-sm flex-col sm:flex-row gap-y-4 sm:gap-y-0 text-center sm:text-left">
        <div className="text-xl font-semibold">
          <span className="text-black">Jinal Narola</span>{" "}
          <span className="text-blue-600">/</span>{" "}
          <span className="uppercase text-sm text-gray-600 tracking-widest">
            Your Next Hire
          </span>
        </div>
        <nav className="space-x-4 text-sm text-gray-700 flex flex-wrap justify-center font-semibold">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </header>

      {/* Hero Section */}
      <header className="bg-lightBlue rounded h-auto lg:h-[80vh] max-h-[100vw] flex flex-col-reverse lg:flex-row justify-center items-center px-4 sm:px-[10%] py-12 lg:gap-x-20 gap-y-10 mx-3">
        <Card className="w-[17.5rem] min-w-[17.5rem] cardShadow rounded-t bg-white flex flex-col items-center pt-12 overflow-hidden shadow-lg">
          <CardContent className="flex flex-col items-center p-0">
            <div className="rounded-full w-[150px] h-[150px] mb-4 overflow-hidden border-[3px] border-gray-300">
              <Image
                src="/profileimg.jpeg"
                alt="Profile Picture"
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>

            <h1 className="text-xl font-semibold text-gray-900">Jinal Narola</h1>
            <hr className="border-blue-600 border-t-2 mt-4 w-[30%]" />
            <p className="mt-4 mb-6 tracking-widest uppercase text-xs text-center text-gray-500">
              Problem Solver @ <br /> Your Company
            </p>
          </CardContent>

          <div className="bg-gray-100 w-full rounded-b flex items-center py-3 justify-center">
            <a
              aria-label="Linkedin Icon"
              href="https://www.linkedin.com/in/jinal-narola-8336a2281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] p-2 hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="text-white" width={25} height={25} />
            </a>
          </div>
        </Card>

        <div className="flex flex-col w-full max-w-xl text-center lg:text-left items-center lg:items-start px-4">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Hi there, Jinal here</h2>
          <p className="text-lg sm:text-xl max-w-[450px]">
            A <s>software engineer</s> problem solver with years of experience in creating digital greatness for clients across four continents.
          </p>
          <a
            href="#contact"
            className="hidden lg:inline-block bg-white border border-black mt-10 px-10 py-3 font-medium"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* Divider */}
      <div className="w-full h-10 bg-white" />

      {/* About Me Section */}
      <section id="about" className="text-center py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          I am a passionate <strong>Full Stack Developer</strong> with a knack for turning complex problems into simple, elegant digital solutions. With a solid foundation in <strong>React.js, Node.js, and MongoDB</strong>, I specialize in building scalable, responsive web applications that deliver real-world impact.
        </p>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          I enjoy working across the full stack—from crafting pixel-perfect frontends to architecting robust backend systems and APIs. I thrive in collaborative environments and believe in clean code, user-first design, and continuous learning.
        </p>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Beyond the code, I am a curious learner, enthusiastic team player, and someone who values meaningful work that helps businesses and users alike. Let's build something incredible together!
        </p>

        <h3 className="text-xl text-gray-800 mt-16 font-bold">Some Technologies I have Worked With</h3>
       <div className="w-full flex flex-wrap justify-center gap-6 mt-10 px-4">
          {[
            { name: "react", label: "React" },
            { name: "nextdotjs", label: "Next.js" },
            { name: "node-dot-js", label: "Node.js" },
            { name: "express", label: "Express" },
            { name: "mongodb", label: "MongoDB" },
            { name: "tailwindcss", label: "Tailwind CSS" },
            { name: "bootstrap", label: "Bootstrap" },
            { name: "git", label: "Git" },
            { name: "github", label: "GitHub" },
            { name: "firebase", label: "Firebase" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-sm text-gray-700 hover:scale-105 transition-transform"
            >
              <img
                src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tech.name}.svg`}
                alt={tech.label}
                className="w-10 h-10 mb-2"
              />
              <span className="text-center">{tech.label}</span>
            </div>
          ))}
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="text-center py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Projects I’ve Contributed To</h3>
        <ul className="text-gray-700 space-y-1">
          <li>- FWG</li>
          <li>- FGIIT</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="text-center py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-10">Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
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
      <footer id="contact" className="bg-blue-950 text-white py-12 px-4 sm:px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="mb-8 text-blue-200 italic text-base sm:text-lg">
            “I’d love to hear from you – let's build something great together.”
          </p>
          <div className="space-y-2 text-blue-100 text-sm sm:text-base">
            <p>
              Email: <a href="mailto:jinalnarola42@gmail.com" className="underline">jinalnarola42@gmail.com</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/jinal-narola-8336a2281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/JinalNarola</a>
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
