import { motion } from "framer-motion";
import { DATA } from "@/data/portfolio";

const profileImg = "/mujahid.jpeg";

/* Animation Variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function About() {
  return (
    <section id="about" className="py-20 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-center"
        >

          {/* Image Column */}
          <motion.div
            variants={fadeLeft}
            className="relative md:pr-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square md:aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/5"
            >
              <img
                src={profileImg}
                alt="Mujahid Ali - Frontend Developer"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 glass p-5 rounded-xl border border-white/10 hidden md:block shadow-xl max-w-xs"
            >
              <div className="flex justify-between items-center gap-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">
                    {DATA.profile.experience}
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    Hands-on Experience
                  </p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">
                    {DATA.profile.projects_completed}
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    Projects Completed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={fadeRight}
            className="space-y-6"
          >
            <motion.h3 variants={fadeUp} className="text-2xl font-bold text-white">
              I'm a <span className="text-primary">Frontend Developer</span>{" "}
              crafting modern, responsive, and user-focused web experiences from Karachi, Pakistan.
            </motion.h3>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              {DATA.profile.about}
            </motion.p>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              My journey involves solving UI challenges, optimizing performance,
              and continuously learning new technologies to build reliable and
              engaging digital products.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              variants={container}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <Info label="Name" value={DATA.profile.name} />
              <Info label="Email" value={DATA.profile.email} />
              <Info label="Location" value={DATA.profile.location} />
              <Info
                label="Availability"
                value="Open to Frontend Opportunities"
                highlight
              />
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="pt-6">
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition"
              >
                Let’s Work Together
              </a>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

/* Reusable Info Card */
function Info({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass p-4 rounded-lg border border-white/5"
    >
      <span className="block text-sm text-muted-foreground mb-1">{label}</span>
      <span className={`block font-medium ${highlight ? "text-green-400" : "text-white"}`}>
        {value}
      </span>
    </motion.div>
  );
}
