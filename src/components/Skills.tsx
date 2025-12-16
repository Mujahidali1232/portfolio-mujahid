import { motion } from "framer-motion";
import { DATA } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I work with a modern stack to build fast, secure, and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DATA.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 group"
            >
              {/* Image with link */}
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full overflow-hidden border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner"
                title={skill.name}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </a>

              {/* Skill name and progress bar */}
              <div className="text-center">
                <h3 className="font-medium text-white mb-1">{skill.name}</h3>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
