import { useState } from "react";
import { Mail, Phone, Send, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      name: "Email",
      value: "olawalefemi041@gmail.com",
      icon: Mail,
      url: "mailto:olawalefemi041@gmail.com?subject=Portfolio Inquiry",
    },
    {
      name: "WhatsApp",
      value: "+234 704 258 4760",
      icon: MessageCircle,
      url: "https://wa.me/2347042584760?text=Hello!%20I%20came%20across%20your%20portfolio.",
    },
    {
      name: "Call Me",
      value: "+234 704 258 4760",
      icon: Phone,
      url: "tel:+2347042584760",
    },
    {
      name: "Location",
      value: "Lagos, Nigeria",
      icon: MapPin,
      url: "https://maps.google.com/?q=Lagos,Nigeria",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "1a7a54ac-88b4-47a3-9e5d-4c60ed9b684e",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Olawale Portfolio",
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(result.message || "Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error sending message. Please check your internet connection or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#08090a] border-t border-white/[0.04]">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] font-semibold text-indigo-400 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Connection
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-gray-400 text-sm max-w-md mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind, want to discuss opportunities, or simply say hello? Send a message or reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-5 p-5 bg-[#0f1115]/40 border border-white/[0.06] hover:border-white/[0.12] rounded-2xl hover:bg-[#0f1115]/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-colors flex-shrink-0">
                  <method.icon size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.1em] font-bold text-gray-500">
                    {method.name}
                  </h4>
                  <p className="text-sm font-semibold text-white mt-1 group-hover:text-indigo-300 transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0f1115]/50 border border-white/[0.06] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hi Olawale, let's discuss a new project opportunity..."
                        className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                      <CheckCircle size={32} className="animate-bounce" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                      <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. I have received your details and will get back to you as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 text-xs font-semibold hover:bg-white/[0.08] hover:text-white transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
