import Image from "next/image";
import Profile from "@/../public/images/naveezpic.png";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="mx-auto max-w-6xl px-4 sm:px-6 bg-background text-foreground"
    >
      <div className="about py-12">
        <h1 className="text-center text-4xl font-bold mb-8">ABOUT ME</h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex justify-center w-1/2">
            <Image
              className="w-48 h-48 rounded-full object-cover shadow-lg"
              src={Profile}
              alt="profile"
            />
          </div>
          {/* About Details Section */}
          <div className="flex flex-col justify-center text-lg">
            <p className="mb-4">
              Hi there! I am <strong>Naveez Munir</strong>
            </p>
            <p className="mb-4">
              A passionate programmer, born and raised in Pakistan. I am a Full
              Stack Web Developer specializing in React.js, Express.js, Node.js,
              and MongoDB.
            </p>
            <p className="mb-4">
              In 2021, I aim to complete my Software Engineering degree with a
              specialization in 'Web Technologies'.
            </p>
            <p className="mb-4">
              I love learning about new technologies, understanding the problems
              they solve, and finding ways to use them to build better, scalable
              products.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#contact"
                className="px-6 py-2 border-2 border-accent text-foreground font-semibold rounded-lg shadow-md hover:bg-accent hover:text-background"
              >
                Let's talk
              </a>
              <a
                href="https://drive.google.com/file/d/1QU71Lh49DjFdXM_3wMd1yCRyipR7uPNW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-accent text-foreground font-semibold rounded-lg shadow-md hover:bg-accent hover:text-background"
              >
                My Resume
              </a>
              <a
                href="https://github.com/Naveez67"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-accent text-foreground font-semibold rounded-lg shadow-md hover:bg-accent hover:text-background"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/naveez-ahmad-08660517b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-accent text-foreground font-semibold rounded-lg shadow-md hover:bg-accent hover:text-background"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
