
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Personvern = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-[#0e1f33] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Personvernerklæring</h1>
            <Breadcrumb>
              <BreadcrumbList className="text-gray-300">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-white transition-colors">Hjem</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="font-medium">Personvern</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-[#e74c3c]" />
            </div>
            
            <h2 className="text-2xl font-bold text-[#0e1f33] mb-6 text-center">Vi tar personvern på alvor</h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                GnG Branding er forpliktet til å beskytte dine personopplysninger og overholde gjeldende personvernlovgivning, inkludert 
                den europeiske personvernforordningen (GDPR). Denne personvernerklæringen beskriver hvordan vi samler inn, bruker og beskytter 
                dine personopplysninger når du bruker nettstedet vårt eller våre tjenester.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">1. Hvilke opplysninger vi samler inn</h3>
              <p>
                Vi kan samle inn følgende typer personopplysninger:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kontaktinformasjon (navn, e-postadresse, telefonnummer)</li>
                <li>Firmanavn og stillingstittel</li>
                <li>Informasjon du gir oss når du fyller ut skjemaer på nettstedet vårt</li>
                <li>Informasjon om hvordan du bruker nettstedet vårt (gjennom cookies)</li>
                <li>Korrespondanse du sender oss</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">2. Hvordan vi bruker dine personopplysninger</h3>
              <p>
                Vi bruker dine personopplysninger til følgende formål:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>For å levere våre tjenester til deg</li>
                <li>For å svare på dine henvendelser</li>
                <li>For å sende deg informasjon du har bedt om</li>
                <li>For å forbedre våre tjenester og nettstedet</li>
                <li>For å overholde våre juridiske forpliktelser</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">3. Deling av personopplysninger</h3>
              <p>
                Vi deler ikke dine personopplysninger med tredjeparter med mindre:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Det er nødvendig for å levere våre tjenester</li>
                <li>Det kreves av loven</li>
                <li>Du har gitt ditt samtykke</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">4. Sikkerhet</h3>
              <p>
                Vi har implementert tekniske og organisatoriske tiltak for å beskytte dine personopplysninger mot 
                uautorisert tilgang, tap eller misbruk. Vi gjennomgår regelmessig våre sikkerhetstiltak for å sikre 
                at de er oppdaterte og effektive.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">5. Dine rettigheter</h3>
              <p>
                Under GDPR har du følgende rettigheter:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Rett til innsyn i dine personopplysninger</li>
                <li>Rett til retting av uriktige opplysninger</li>
                <li>Rett til sletting ("retten til å bli glemt")</li>
                <li>Rett til begrensning av behandling</li>
                <li>Rett til dataportabilitet</li>
                <li>Rett til å protestere mot behandling</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">6. Kontakt oss</h3>
              <p>
                Hvis du har spørsmål om vår behandling av dine personopplysninger eller ønsker å utøve dine rettigheter, 
                kan du kontakte oss på:
              </p>
              <p className="mt-2">
                E-post: kontakt@gngbranding.no<br />
                Telefon: +47 912 46 491
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">7. Endringer i personvernerklæringen</h3>
              <p>
                Vi kan oppdatere denne personvernerklæringen fra tid til annen. Eventuelle endringer vil bli publisert på denne siden.
              </p>
              <p className="mt-6 text-sm text-gray-500">
                Sist oppdatert: 15. april 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Personvern;
