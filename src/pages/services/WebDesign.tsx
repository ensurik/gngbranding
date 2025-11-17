
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Check, ArrowRight } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const WebDesign = () => {
  useCanonicalUrl();
  
  // Helper function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" onClick={scrollToTop}>Hjem</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" onClick={scrollToTop}>Tjenester</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Webdesign</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block text-[#e74c3c] font-semibold text-sm uppercase tracking-wider mb-2">Nettsider & Nettbutikker</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0e1f33] mb-6">Skreddersydde nettsider og komplette nettbutikker</h1>
            <p className="text-lg text-brand-gray mb-8">
              Vi designer og utvikler alt fra enkle presentasjonssider til avanserte e-handelsløsninger. Få en gratis demo og opplev rask leveringstid med profesjonell kvalitet. Alle løsninger er SEO-optimalisert og mobilvennlige.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#0e1f33] hover:bg-[#0e1f33]/90">
                <Link to="/contact" onClick={scrollToTop}>Få gratis demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio" onClick={scrollToTop}>Se våre prosjekter</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Globe className="w-64 h-64 text-[#0e1f33]" />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-10 text-center">Våre tjenester innen nettsider og nettbutikker</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Presentasjonsnettsider",
                description: "Moderne nettsider for bedrifter som ønsker å bygge tillit og profesjonalitet."
              },
              {
                title: "E-handel & Nettbutikker",
                description: "Komplette nettbutikkløsninger med betalingsintegrasjon og produktkatalog."
              },
              {
                title: "Responsivt Design",
                description: "Nettsider som fungerer perfekt på alle enheter - fra mobil til desktop."
              },
              {
                title: "Landingssider",
                description: "Konverteringsoptimaliserte sider for kampanjer og markedsføring."
              },
              {
                title: "Rask Leveringstid",
                description: "Effektiv prosjektgjennomføring med gratis demo - vi leverer på tid."
              },
              {
                title: "Skreddersydde Løsninger",
                description: "Webapplikasjoner og spesialløsninger tilpasset dine behov."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#0e1f33] mb-3">{service.title}</h3>
                <p className="text-brand-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-8 text-center">Hvorfor velge oss for nettsider og nettbutikker?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Gratis demo - se løsningen før du forplikter deg",
              "Rask leveringstid uten å kompromittere på kvalitet",
              "SEO-optimaliserte nettsider som rangerer høyt i søkemotorer",
              "Mobilvennlig design som fungerer på alle enheter",
              "Betalingsintegrasjon for nettbutikker (Vipps, Stripe, Klarna)",
              "Produktkatalog og lagerstyring for nettbutikker",
              "Konverteringsoptimalisert for å øke salg og leads",
              "Skalerbare løsninger som vokser med din bedrift"
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-[#e74c3c] mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-brand-gray">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-6">Klar for å få din nye nettside eller nettbutikk?</h2>
          <p className="text-lg text-brand-gray mb-8 max-w-3xl mx-auto">
            Få en gratis demo og se hvordan vi kan hjelpe deg med å oppnå dine mål på nett. Vi lover rask leveringstid og profesjonell kvalitet.
          </p>
          <Button asChild size="lg" className="bg-[#0e1f33] hover:bg-[#0e1f33]/90">
            <Link to="/contact" className="inline-flex items-center" onClick={scrollToTop}>
              Få gratis demo nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WebDesign;
