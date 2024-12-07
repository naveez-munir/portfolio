export const Footer = () => {
  return (
    <footer className="bg-background border-t border-borderColor mt-24">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Logo & Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-foreground">Naveez Munir</h3>
            <p className="text-foreground/60 mt-2">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              Twitter
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-accent">Web Development</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent">Mobile Apps</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent">Cloud Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-accent">My Story</a></li>
              <li><a href="#skills" className="text-foreground/60 hover:text-accent">Skills</a></li>
              <li><a href="#projects" className="text-foreground/60 hover:text-accent">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-accent">Email</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent">Schedule Call</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-accent">Privacy</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-borderColor pt-8">
          <p className="text-center text-foreground/60">
            © Naveez Munir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
 };
