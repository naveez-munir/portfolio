'use client'
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-borderColor mt-24">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Logo & Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Naveez Munir
            </h3>
            <p className="text-foreground/60 mt-2 text-lg">
              Software Engineer | Full Stack Developer
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <a
              href="https://github.com/naveez-munir"
              className="text-foreground/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/naveez-munir-08660517b/"
              className="text-foreground/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            {/* <a
              href="#"
              className="text-foreground/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-borderColor/30 pt-8">
          <p className="text-center text-foreground/40 text-sm">
            © {new Date().getFullYear()} Naveez Munir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
