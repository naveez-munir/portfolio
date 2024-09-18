import { Code, Terminal, Server } from "lucide-react";

export const Services = () => {
  return (
    <div
      id="services"
      className="mx-auto max-w-6xl px-4 sm:px-6 bg-[var(--background)] text-[var(--foreground)] py-12"
    >
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-wide text-[var(--accent)]">
          Services
        </p>
        <h2 className="text-4xl font-bold">What I Can Offer</h2>
        <p className="mt-4 text-lg">
          From frontend to backend, I provide complete solutions with the latest
          technologies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Frontend Development */}
        <div className="text-center p-6 bg-[var(--foreground)] rounded-lg shadow-md">
          <Code className="mx-auto text-[var(--background)] w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[var(--background)]">
            Frontend Development
          </h3>
          <p className="mb-2">Building responsive and interactive UIs.</p>
          <p className="text-sm text-gray-400">React, Next.js, Tailwind CSS</p>
          <p className="mt-4 font-semibold text-lg">150+ Projects</p>
        </div>

        {/* Backend Development */}
        <div className="text-center p-6 bg-[var(--foreground)] rounded-lg shadow-md">
          <Server className="mx-auto text-[var(--background)] w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[var(--background)]">
            Backend Development
          </h3>
          <p className="mb-2">
            Creating robust and scalable server-side solutions.
          </p>
          <p className="text-sm text-gray-400">Node.js, Nest.js, Express</p>
          <p className="mt-4 font-semibold text-lg">120+ Projects</p>
        </div>

        {/* Full-Stack Development */}
        <div className="text-center p-6 bg-[var(--foreground)] rounded-lg shadow-md">
          <Terminal className="mx-auto text-[var(--background)] w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[var(--background)]">
            Full-Stack Development
          </h3>
          <p className="mb-2">
            Delivering complete applications from backend to frontend.
          </p>
          <p className="text-sm text-gray-400">MERN, React, Next.js, Node.js</p>
          <p className="mt-4 font-semibold text-lg">80+ Projects</p>
        </div>

        {/* Cloud Services */}
        <div className="text-center p-6 bg-[var(--foreground)] rounded-lg shadow-md">
          <Server className="mx-auto text-[var(--background)] w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[var(--background)]">
            Cloud Solutions
          </h3>
          <p className="mb-2">
            Deploying serverless and cloud-based applications.
          </p>
          <p className="text-sm text-gray-400">AWS, Lambda, DynamoDB</p>
          <p className="mt-4 font-semibold text-lg">50+ Projects</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-12 text-center">
        <div className="text-[var(--foreground)]">
          <p className="text-4xl font-bold">3+</p>
          <p className="text-sm text-gray-400">Years of Experience</p>
        </div>
        <div className="text-[var(--foreground)]">
          <p className="text-4xl font-bold">200+</p>
          <p className="text-sm text-gray-400">Satisfied Clients</p>
        </div>
        <div className="text-[var(--foreground)]">
          <p className="text-4xl font-bold">500+</p>
          <p className="text-sm text-gray-400">Projects Completed</p>
        </div>
        <div className="text-[var(--foreground)]">
          <p className="text-4xl font-bold">120+</p>
          <p className="text-sm text-gray-400">Technologies Mastered</p>
        </div>
      </div>
    </div>
  );
};
