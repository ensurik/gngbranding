
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Anders Grønning",
      role: "Daglig leder / Webutvikler",
      image: "/placeholder.svg",
      bio: "Anders har over 10 års erfaring med webdesign og digital markedsføring. Hans fokus er å skape nettsider som både ser bra ut og gir resultater.",
      email: "anders@gngbranding.no",
      linkedin: "#"
    },
    {
      name: "Maria Gundersen",
      role: "Grafisk designer",
      image: "/placeholder.svg",
      bio: "Maria er vår kreative kraft med bakgrunn fra reklamebyrå og forlag. Hun skaper visuell identitet som får din merkevare til å skille seg ut.",
      email: "maria@gngbranding.no",
      linkedin: "#"
    },
    {
      name: "Thomas Berg",
      role: "Digital markedsfører",
      image: "/placeholder.svg",
      bio: "Thomas har spesialisert seg på digital markedsføring og hjelper våre kunder med å nå ut til rett målgruppe på rett sted til rett tid.",
      email: "thomas@gngbranding.no",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-accent font-semibold text-sm uppercase tracking-wider mb-2">Vårt team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Møt folkene bak GnGBranding</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Vi er et dedikert team av fagfolk som brenner for å hjelpe bedrifter med å lykkes i den digitale verden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="mb-4 aspect-square bg-gray-200 rounded-full overflow-hidden mx-auto w-48 h-48">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-brand-blue">{member.name}</h3>
                <p className="text-brand-accent mb-3">{member.role}</p>
                <p className="text-brand-gray mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="p-2 text-brand-gray hover:text-brand-blue transition-colors"
                    title={`Send e-post til ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.linkedin} 
                    className="p-2 text-brand-gray hover:text-brand-blue transition-colors"
                    title={`${member.name} på LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
