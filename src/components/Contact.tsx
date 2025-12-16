import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { DATA } from "@/data/portfolio";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // EmailJS configuration - Replace with your actual credentials from https://www.emailjs.com/
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const userId = import.meta.env.VITE_EMAILJS_USER_ID || "YOUR_USER_ID";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        userId
      );
      
      toast({
        title: "Message sent successfully",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4 text-white">Contact Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to send me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                <p className="text-muted-foreground text-sm mb-2">For inquiries and projects</p>
                <a href={`mailto:${DATA.profile.email}`} className="text-primary hover:underline font-medium">{DATA.profile.email}</a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                <a href={`tel:${DATA.profile.phone}`} className="text-primary hover:underline font-medium">{DATA.profile.phone}</a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Location</h3>
                <p className="text-muted-foreground text-sm mb-2">Based in</p>
                <span className="text-white font-medium">{DATA.profile.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass p-8 rounded-2xl border border-white/10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus:border-primary text-white h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 focus:border-primary text-white h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary text-white resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit button with WhatsApp icon and link */}
                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary text-background hover:bg-primary/90 font-bold h-12 px-8 flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </Button>

                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
