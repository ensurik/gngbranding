import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const Contact = () => {
  useCanonicalUrl();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    emailjs.init("PQTe6SGXpou8W6YTI");
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Manglende informasjon",
        description: "Vennligst fyll ut navn, e-post og melding.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_kjnubtl',
        'template_hmsykol',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          type: 'contact'
        }
      );
      
      toast({
        title: "Melding sendt!",
        description: "Takk for din henvendelse. Vi kommer tilbake til deg så snart som mulig.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Noe gikk galt",
        description: "Vennligst prøv igjen senere.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt Oss</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Vi ser frem til å høre fra deg og diskutere hvordan vi kan hjelpe din bedrift med å oppnå sine mål.
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-8">La oss snakke sammen</h2>
              <p className="text-brand-gray mb-12">
                Har du spørsmål om våre tjenester eller ønsker å diskutere et potensielt prosjekt? Fyll ut skjemaet eller kontakt oss direkte via kontaktinformasjonen nedenfor.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-blue">Telefon</h3>
                    <p className="text-brand-gray">+47 912 46 491</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-blue">E-post</h3>
                    <p className="text-brand-gray">kontakt@gngbranding.no</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-blue">Åpningstider</h3>
                    <p className="text-brand-gray">Mandag - Fredag: 09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-lightGray p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Send oss en melding</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-brand-blue font-medium mb-2">Navn *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-brand-blue font-medium mb-2">E-post *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-brand-blue font-medium mb-2">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-brand-blue font-medium mb-2">Bedrift</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-brand-blue font-medium mb-2">Melding *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-medium py-3 rounded-md transition-colors ${
                    isSubmitting 
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
                      : "bg-brand-blue text-white hover:bg-blue-800"
                  }`}
                >
                  {isSubmitting ? "Sender..." : "Send melding"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
