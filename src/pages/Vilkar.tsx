
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const Vilkar = () => {
  useCanonicalUrl();
  
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Vilkår og betingelser</h1>
            <Breadcrumb>
              <BreadcrumbList className="text-gray-300">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-white transition-colors">Hjem</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="font-medium">Vilkår</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-16 w-16 text-[#e74c3c]" />
            </div>
            
            <h2 className="text-2xl font-bold text-[#0e1f33] mb-6 text-center">Vilkår og betingelser for GnG Branding</h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Disse vilkår og betingelser gjelder for alle tjenester som leveres av GnG Branding. Ved å benytte våre tjenester 
                aksepterer du disse vilkårene i sin helhet.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">1. Definisjon av tjenester</h3>
              <p>
                GnG Branding tilbyr tjenester innen webdesign, grafisk design, digital markedsføring og merkevarebygging. 
                Omfanget av hver enkelt tjeneste vil bli definert i et separat tilbud eller avtale for hvert prosjekt.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">2. Priser og betaling</h3>
              <p>
                Alle priser oppgis eksklusive merverdiavgift, med mindre annet er spesifisert. Betaling skal skje i henhold til 
                betalingsbetingelsene spesifisert i tilbudet eller avtalen. Standard betalingsbetingelser er 50% forskuddsbetaling 
                ved prosjektstart og resterende 50% ved prosjektets ferdigstillelse.
              </p>
              <p className="mt-2">
                Ved forsinket betaling vil det påløpe forsinkelsesrenter i henhold til norsk lov.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">3. Leveringstid</h3>
              <p>
                Leveringstid avtales for hvert enkelt prosjekt. GnG Branding vil gjøre sitt ytterste for å overholde avtalt 
                leveringstid, men kan ikke holdes ansvarlig for forsinkelser som skyldes forhold utenfor vår kontroll, eller 
                mangel på nødvendig input eller tilbakemeldinger fra kunden.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">4. Kundens forpliktelser</h3>
              <p>
                Kunden forplikter seg til å:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Gi GnG Branding all nødvendig informasjon og materiale som kreves for å utføre tjenestene</li>
                <li>Gi tilbakemeldinger på leveranser innen rimelig tid</li>
                <li>Sikre at alt materiale som leveres til GnG Branding ikke krenker tredjeparts rettigheter</li>
                <li>Betale for tjenestene i henhold til avtale</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">5. Immaterielle rettigheter</h3>
              <p>
                Med mindre annet er avtalt skriftlig, vil alle immaterielle rettigheter til materialet som skapes av GnG Branding 
                overføres til kunden når full betaling er mottatt. GnG Branding forbeholder seg retten til å bruke arbeidet som 
                referanse i markedsføringsøyemed, med mindre annet er avtalt skriftlig.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">6. Konfidensialitet</h3>
              <p>
                GnG Branding forplikter seg til å behandle all informasjon fra kunden konfidensielt, og vil ikke dele denne 
                informasjonen med tredjeparter uten kundens samtykke, med mindre dette er påkrevd ved lov.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">7. Ansvarsbegrensning</h3>
              <p>
                GnG Brandings ansvar for eventuelle tap eller skader er begrenset til det beløp kunden har betalt for tjenestene. 
                Vi er ikke ansvarlige for indirekte tap eller følgeskader, inkludert men ikke begrenset til tapt fortjeneste, 
                tapt omsetning eller tap av data.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">8. Avbestilling</h3>
              <p>
                Ved avbestilling av tjenester vil følgende betingelser gjelde:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Avbestilling før prosjektstart: Ingen kostnad</li>
                <li>Avbestilling etter prosjektstart, men før 50% ferdigstillelse: 50% av totalt avtalt beløp</li>
                <li>Avbestilling etter 50% ferdigstillelse: 100% av totalt avtalt beløp</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">9. Tvister</h3>
              <p>
                Eventuelle tvister som oppstår i forbindelse med disse vilkårene skal løses i henhold til norsk lov, og med Oslo tingrett som verneting.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">10. Endringer i vilkårene</h3>
              <p>
                GnG Branding forbeholder seg retten til å endre disse vilkårene. Endringer vil bli publisert på vårt nettsted og vil gjelde 
                for nye avtaler inngått etter publiseringsdatoen.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">11. Kontakt</h3>
              <p>
                Hvis du har spørsmål om disse vilkårene, kan du kontakte oss på:
              </p>
              <p className="mt-2">
                E-post: kontakt@gngbranding.no<br />
                Telefon: +47 912 46 491
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

export default Vilkar;
