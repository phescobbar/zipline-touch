import { Link } from "react-router-dom";
import { Phone, MapPin, Building2 } from "lucide-react";
import logo from "@/assets/logo.png";
import montesiteLogo from "@/assets/montesite-logo.svg";

const ThirdLayout = () => {
  const timelineItems = [
    {
      icon: Phone,
      emoji: "📞",
      label: "Telefone",
      value: "0800 591 9013",
      link: "tel:08005919013",
    },
    {
      icon: MapPin,
      emoji: "📍",
      label: "Endereço",
      value: "Rua do Ouro, 1740, sala 709, Serra - ES - CEP 29160-878",
      link: null,
    },
    {
      icon: Building2,
      emoji: "🏢",
      label: "CNPJ",
      value: "04.693.076/0001-01",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          {/* Sidebar - Fixed on Desktop */}
          <aside className="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-8 lg:h-screen flex flex-col justify-between py-8 lg:py-16">
            <div className="text-center lg:text-left">
              <Link
                to="/"
                className="inline-block mb-6 lg:mb-8 hover:opacity-80 transition-opacity"
              >
                <img
                  src={logo}
                  alt="Zipline Tecnologia"
                  className="w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0 object-contain"
                />
              </Link>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                Zipline
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Tecnologia
              </p>
            </div>

            {/* Navigation Links - Desktop Only */}
            <nav className="hidden lg:flex flex-col gap-3 mt-8">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-accent/50"
              >
                ← Layout Principal
              </Link>
              <Link
                to="/alternative"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-accent/50"
              >
                ← Layout Alternativo
              </Link>
            </nav>
          </aside>

          {/* Timeline Content */}
          <main className="lg:w-2/3 xl:w-3/4 py-8 lg:py-16">
            {/* Mobile Navigation */}
            <div className="flex gap-3 mb-8 lg:hidden">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md bg-card hover:bg-accent/50 border border-border"
              >
                Layout 1
              </Link>
              <Link
                to="/alternative"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md bg-card hover:bg-accent/50 border border-border"
              >
                Layout 2
              </Link>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

              {/* Timeline Items */}
              <div className="space-y-12 lg:space-y-16">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-16 lg:pl-20 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline Circle */}
                    <div className="absolute left-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl lg:text-3xl shadow-lg shadow-primary/20">
                      {item.emoji}
                    </div>

                    {/* Content Card */}
                    <div className="group bg-card/60 backdrop-blur-sm border border-border rounded-lg p-6 lg:p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary mt-1" />
                        <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
                          {item.label}
                        </h2>
                      </div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-base lg:text-lg text-muted-foreground hover:text-primary transition-colors inline-block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base lg:text-lg text-muted-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 lg:mt-24 pt-8 border-t border-border">
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm text-muted-foreground">Feito com</p>
                <img
                  src={montesiteLogo}
                  alt="MonteSite"
                  className="h-4 lg:h-5 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ThirdLayout;
