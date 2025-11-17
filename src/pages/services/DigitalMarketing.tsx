
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Check, ArrowRight } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const DigitalMarketing = () => {
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
              <BreadcrumbPage>Digital Markedsføring</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block text-[#e74c3c] font-semibold text-sm uppercase tracking-wider mb-2">Digital Markedsføring</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0e1f33] mb-6">Resultatorientert digital markedsføring</h1>
            <p className="text-lg text-brand-gray mb-8">
              Vi hjelper deg å nå ditt publikum gjennom målrettet digital markedsføring, søkemotoroptimalisering og sosiale mediestrategier. Vårt fokus er på ROI, data-drevne beslutninger og målbare resultater.
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
            <Smartphone className="w-64 h-64 text-[#0e1f33]" />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-10 text-center">Våre digitale markedsføringstjenester</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "SEO",
                description: "Optimalisering av ditt nettsted for å rangere høyere i søkemotorene."
              },
              {
                title: "Google Ads",
                description: "Målrettet annonsering på Google for økt trafikk og konverteringer."
              },
              {
                title: "Sosiale Medier",
                description: "Strategisk innhold og annonsering på relevante sosiale plattformer."
              },
              {
                title: "Innholdsmarkedsføring",
                description: "Verdifullt innhold som tiltrekker og engasjerer din målgruppe."
              },
              {
                title: "E-post Markedsføring",
                description: "Effektive e-postkampanjer som konverterer og bygger lojalitet."
              },
              {
                title: "Analytikk & Rapportering",
                description: "Datadrevet analyse av kampanjeresultater og kontinuerlig optimalisering."
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
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-8 text-center">Hvorfor velge oss for digital markedsføring?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Databaserte strategier med fokus på ROI",
              "Kontinuerlig optimalisering av kampanjer for bedre resultater",
              "Transparent rapportering og kommunikasjon",
              "Skreddersydde løsninger basert på din bedrifts mål",
              "Bred kompetanse på tvers av digitale kanaler og plattformer",
              "Tett oppfølging og rask responstid"
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-[#e74c3c] mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-brand-gray">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-6">Klar for å øke din digitale synlighet?</h2>
          <p className="text-lg text-brand-gray mb-8 max-w-3xl mx-auto">
            Ta kontakt med oss i dag for en uforpliktende samtale om hvordan vi kan hjelpe deg med å oppnå bedre resultater gjennom digital markedsføring.
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

export default DigitalMarketing;
