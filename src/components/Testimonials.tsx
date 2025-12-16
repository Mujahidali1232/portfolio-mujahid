import { motion } from "framer-motion";
import { Quote, Code } from "lucide-react"; // ReactLogo for React icon
import { Card } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Mujahid delivered our project on time and exceeded our expectations. His attention to detail and ability to translate complex designs into code is remarkable.",
    },
    {
      id: 2,
      quote:
        "One of the best frontend developers I've worked with. He writes clean, maintainable code and has a great eye for design. Highly recommended!",
    },
    {
      id: 3,
      quote:
        "He brought our vision to life perfectly. The animations and interactions he implemented made our website feel truly alive and premium.",
    },
  ];

  return (
    <section className="py-20 bg-background/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4 text-white">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-card/40 border border-transparent backdrop-blur-lg shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-between p-8">
                <Quote className="text-primary/60 mb-6 h-10 w-10" />
                <p className="text-white italic text-lg leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex justify-end">
                  <Code className="h-10 w-10 text-primary/80" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
