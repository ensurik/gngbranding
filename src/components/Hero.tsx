import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
emailjs.init("F2pCQAn1YJS8aF__h");

const Hero = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Manglende informasjon",
        description: "Vennligst fyll ut alle feltene.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_x6861c4",
        "template_upqsxeq",
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
        },
        "F2pCQAn1YJS8aF__h"
      );
      
      toast({
        title: "Forespørsel sendt!",
        description: "Vi kommer tilbake til deg med et prisestimat snart.",
      });
      
      setFormData({
        name: "",
        email: "",
        service: ""
      });
    } catch (error: any) {
      const origin = window.location.origin;
      const errText = error?.text || error?.message || String(error);
      console.error("EmailJS error:", error, "origin:", origin);
      toast({
        title: "Noe gikk galt",
        description: `Feil: ${errText || "Ukjent feil"}. (Origin: ${origin})`,
        variant: "destructive"
      });
    }
    
    setIsSubmitting(false);
  };

  const benefits = [
    "Profesjonell design som konverterer besøkende til kunder",
    "Komplett merkevarebygging fra logo til digital strategi",
    "Skreddersydde løsninger tilpasset ditt budsjett",
    "Gratis oppfølging i 3 måneder etter lansering"
  ];

  return (
    <div className="relative bg-gradient-to-r from-[#0e1f33] to-[#2e4562] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M42.8,-65.2C54.9,-56.3,64.2,-43.4,70.5,-28.8C76.8,-14.2,80.1,2,75.6,15.3C71.1,28.5,58.9,38.8,46.4,48.9C33.9,59.1,21.2,69,5.8,75.3C-9.6,81.5,-27.7,84.1,-41.6,76.6C-55.5,69.1,-65.1,51.4,-73.6,32.9C-82.1,14.4,-89.4,-4.9,-87.4,-23.6C-85.3,-42.2,-73.9,-60.2,-58.3,-68.1C-42.6,-76,-21.3,-73.8,-2.9,-69.7C15.5,-65.6,30.7,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/5">
            <div className="mb-8">
              <img src="/lovable-uploads/a2a7ebd8-4472-46d5-b442-47bc4d9d980c.png" alt="GnG Branding Logo" className="h-16 md:h-20" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
              Profesjonell <span className="text-white/90">webdesign</span> og <span className="text-white/90">merkevarebygging</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-100 max-w-xl animate-fadeIn" style={{animationDelay: "0.2s"}}>
              Vi hjelper din bedrift med å skape en sterk digital tilstedeværelse som konverterer besøkende til kunder.
            </p>
            
            <div className="mb-8 animate-fadeIn" style={{animationDelay: "0.3s"}}>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-white shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{animationDelay: "0.4s"}}>
              <Link to="/contact" onClick={scrollToTop} className="inline-flex items-center justify-center px-6 py-4 bg-white text-[#0e1f33] font-medium rounded-md hover:bg-gray-100 transition-colors">
                Få et uforpliktende tilbud
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/portfolio" onClick={scrollToTop} className="inline-flex items-center justify-center px-6 py-4 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Se våre prosjekter
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block md:w-2/5 animate-fadeIn" style={{animationDelay: "0.5s"}}>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold mb-4">Få et raskt prisestimat</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ditt navn" 
                    className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Din e-post" 
                    className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" 
                  />
                </div>
                <div>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="" className="text-gray-800">Velg tjeneste</option>
                    <option value="webdesign" className="text-gray-800">Webdesign</option>
                    <option value="branding" className="text-gray-800">Merkevarebygging</option>
                    <option value="marketing" className="text-gray-800">Digital Markedsføring</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full font-medium py-2 px-4 rounded transition-colors ${
                    isSubmitting 
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
                      : "bg-white text-[#0e1f33] hover:bg-gray-100"
                  }`}
                >
                  {isSubmitting ? "Sender..." : "Få prisestimat"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
