import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

export const Header = () => {
  const navBarItems = [
    { label: "About", link: "" },
    { label: "Skills", link: "" },
    { label: "Experience", link: "" },
    { label: "projects", link: "" },
    { label: "Contact", link: "" },
  ];
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-foreground px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--foreground), var(--foreground-alt))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center">
            <h1 className="text-background">Logo</h1>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              {navBarItems.map(({ label, link }) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="flex items-center text-background transition hover:text-background/80"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
