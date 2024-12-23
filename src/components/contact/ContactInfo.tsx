"use client"
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactInfo = [
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Phone No",
    details: "+923114128859",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Email Address",
    details: "naveezmunir@gmail.com",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Location",
    details: "Lahore Pakistan",
  },
];

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full relative pt-10 pb-28 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-accent text-sm font-medium uppercase tracking-wider">
            HAVE QUESTION CONTACT US?
          </h3>
          <motion.h2
            className="mt-6 text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Love To Hear From You,
            <br />
            Get In Touch!
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-6 mt-4">
            {ContactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 bg-background rounded-xl shadow-custom border border-borderColor"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-accent/10 p-4 rounded-lg text-accent">
                  {item.icon}
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-foreground/60">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-background p-8 rounded-2xl shadow-custom border border-borderColor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  className="w-full p-4 rounded-lg border border-borderColor bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  className="w-full p-4 rounded-lg border border-borderColor bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <textarea
                placeholder="Your Message *"
                required
                rows={6}
                className="w-full p-4 rounded-lg border border-borderColor bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent mt-6"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <motion.button
                type="submit"
                className="mt-6 bg-accent text-background px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
