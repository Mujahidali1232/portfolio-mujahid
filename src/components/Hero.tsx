import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/portfolio";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import { useCallback } from "react";

// Constants for better maintainability
const NAVIGATION_ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  CONTACT: '/contact',
  GITHUB: DATA.profile.social.github,
  LINKEDIN: DATA.profile.social.linkedin,
  TWITTER: DATA.profile.social.twitter,
} as const;

// Types for better type safety
interface NavigationConfig {
  href: string;
  label: string;
  variant?: 'default' | 'outline';
  external?: boolean;
}

const NAVIGATION_ITEMS: NavigationConfig[] = [
  {
    href: NAVIGATION_ROUTES.ABOUT,
    label: 'About Me',
    variant: 'default',
  },
  {
    href: NAVIGATION_ROUTES.CONTACT,
    label: 'Contact Me',
    variant: 'outline',
  },
];

// Enhanced Link component with error handling and accessibility
const NavigationButton = ({
  href,
  label,
  variant = 'default',
  external = false
}: NavigationConfig) => {
  // Utility function for smooth scrolling with error handling
  const scrollToSection = useCallback((sectionId: string) => {
    try {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        // Fallback: scroll to top if element not found
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      // Fallback to simple scroll
      window.scrollTo(0, 0);
    }
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href);
    }
  }, [href, scrollToSection]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (href.startsWith('#')) {
        scrollToSection(href);
      }
    }
  }, [href, scrollToSection]);

  return (
    <Button
      asChild
      size="lg"
      variant={variant}
      className={
        variant === 'default' 
          ? "rounded-full text-base px-8 h-12 bg-primary hover:bg-primary/90 text-background font-bold transition-all duration-300 hover:scale-105"
          : "rounded-full text-base px-8 h-12 border-white/20 hover:bg-white/5 transition-all duration-300 hover:scale-105"
      }
    >
      <a
        href={href}
        onClick={!external ? handleClick : undefined}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Navigate to ${label}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
      >
        {label}
      </a>
    </Button>
  );
};

const heroBg = "/React.jpg";
const profileImg = "/mujahid.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2">
            Available for Freelance Projects
          </div>

          {/* Animated Heading */}
          <motion.h3
            className="text-5xl md:text-7xl font-bold font-heading leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Mujahid Ali <br />
            <span className="text-gradient">
              I'm a React & Next.js Developer |
            </span>
          </motion.h3>

          {/* Animated Subheading */}
          <motion.h2
            className="text-2xl md:text-3xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {DATA.profile.tagline}
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="text-muted-foreground max-w-lg text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            using the latest technologies like React and Next.js. I am
            passionate about building high-quality software that makes a
            positive impact on people's lives worldwide.{" "}
            <span className="text-white font-medium">worldwide</span>.
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-4" role="navigation" aria-label="Main navigation">
            {NAVIGATION_ITEMS.map((item, index) => (
              <NavigationButton
                key={`nav-${index}`}
                href={item.href}
                label={item.label}
                variant={item.variant}
              />
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4 text-muted-foreground" role="navigation" aria-label="Social media links">
            <a
              href={NAVIGATION_ROUTES.GITHUB}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded p-1"
              aria-label="Visit GitHub profile"
            >
              <Github size={24} />
            </a>
            <a
              href={NAVIGATION_ROUTES.LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded p-1"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={NAVIGATION_ROUTES.TWITTER}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded p-1"
              aria-label="Visit Twitter profile"
            >
              <Twitter size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-[400px] h-[400px] mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-4 rounded-full border-2 border-white/10 z-10" />
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl z-20">
              <img
                src={profileImg}
                alt="Mujahid Ali"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-4 glass px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 z-30 shadow-lg"
            >
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-white">
                Next.js Expert
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 -left-4 glass px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 z-30 shadow-lg"
            >
              <span className="text-2xl">⚛️</span>
              <span className="text-sm font-medium text-white">
                React Developer
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50 hidden md:block" aria-hidden="true">
        <ArrowDown size={32} />
      </div>
    </section>
  );
}
