
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, Check, ArrowRight } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const Branding = () => {
  useCanonicalUrl();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Hjem</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Tjenester</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Merkevarebygging</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block text-[#e74c3c] font-semibold text-sm uppercase tracking-wider mb-2">Merkevarebygging</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0e1f33] mb-6">Bygg en sterk merkevare som skaper lojalitet</h1>
            <p className="text-lg text-brand-gray mb-8">
              Vi utvikler helhetlige merkevarestrategier som differensierer din bedrift i et konkurranseutsatt marked og bygger langsiktig kundelojalitet. Vårt fokus er på autentisitet, konsistens og emosjonell tilknytning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#0e1f33] hover:bg-[#0e1f33]/90">
                <Link to="/contact">Få et tilbud</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">Se våre prosjekter</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Megaphone className="w-64 h-64 text-[#0e1f33]" />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-10 text-center">Våre merkevarebyggingstjenester</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Merkevarestrategi",
                description: "Definering av din merkevares kjerneverdier, posisjonering og differensiering."
              },
              {
                title: "Merkevareidentitet",
                description: "Utvikling av logo, visuell identitet og merkevareretningslinjer."
              },
              {
                title: "Navngiving",
                description: "Utvikle distinktive og minnerverdige navn for bedrifter og produkter."
              },
              {
                title: "Merkevarearkitektur",
                description: "Strategisk organisering av din portefølje av merker og sub-merker."
              },
              {
                title: "Merkevareopplevelse",
                description: "Utforming av konsistente kundeopplevelser på tvers av alle touchpoints."
              },
              {
                title: "Merkevarekommunikasjon",
                description: "Utvikling av den riktige tonen og budskapet for din merkevare."
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
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-8 text-center">Hvorfor velge oss for merkevarebygging?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Strategisk tilnærming basert på grundig markedsanalyse",
              "Dyp forståelse for hva som bygger sterke merkevarer",
              "Fokus på både emosjonelle og rasjonelle aspekter ved din merkevare",
              "Helhetlig perspektiv på alle aspekter ved din merkevare",
              "Erfaring med å bygge sterke merkevarer i ulike bransjer",
              "Langsiktig partnerskap for kontinuerlig merkevarebygging"
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-[#e74c3c] mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-brand-gray">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-6">Klar for å styrke din merkevare?</h2>
          <p className="text-lg text-brand-gray mb-8 max-w-3xl mx-auto">
            Ta kontakt med oss i dag for en uforpliktende samtale om hvordan vi kan hjelpe deg med å bygge en sterkere merkevare.
          </p>
          <Button asChild size="lg" className="bg-[#0e1f33] hover:bg-[#0e1f33]/90">
            <Link to="/contact" className="inline-flex items-center">
              Få et tilbud nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Branding;
