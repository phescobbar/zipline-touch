import { Link } from "react-router-dom";
import { Phone, MapPin, Building2 } from "lucide-react";
import logo from "@/assets/logo.png";
import montesiteLogo from "@/assets/montesite-logo.svg";

const FourthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex justify-end gap-2">
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Layout 1
          </Link>
          <Link
            to="/alternative"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Layout 2
          </Link>
          <Link
            to="/layout-3"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Layout 3
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto space-y-16 lg:space-y-24">
          {/* Hero Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <img
                src={logo}
                alt="Zipline Tecnologia"
                className="h-32 md:h-40 lg:h-48 w-auto mx-auto object-contain drop-shadow-2xl"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                  Zipline
                </span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground tracking-wide">
                Tecnologia
              </p>
            </div>
          </div>

          {/* Contact Cards - Elegant Vertical Stack */}
          <div className="space-y-6 max-w-2xl mx-auto">
            {/* Phone Card */}
            <a
              href="tel:08006033336"
              className="group block animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 lg:p-10 hover:bg-card/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm lg:text-base text-muted-foreground font-medium mb-2 uppercase tracking-wider">
                      Telefone
                    </p>
                    <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
                      0800 603 3336
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div
              className="block animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 lg:p-10 hover:bg-card/60 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm lg:text-base text-muted-foreground font-medium mb-3 uppercase tracking-wider">
                      Endereço
                    </p>
                    <p className="text-lg lg:text-xl text-foreground leading-relaxed">
                      Rua do Acampamento nº 380<br />
                      Centro - Santa Maria - RS<br />
                      <span className="text-muted-foreground">CEP: 97050-002</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CNPJ Card */}
            <div
              className="block animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 lg:p-10 hover:bg-card/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Building2 className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm lg:text-base text-muted-foreground font-medium mb-2 uppercase tracking-wider">
                      CNPJ
                    </p>
                    <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground font-mono tracking-tight">
                      04.693.497/0001-21
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-sm text-muted-foreground">Feito com</p>
          <img
            src={montesiteLogo}
            alt="MonteSite"
            className="h-4 w-auto"
          />
        </div>
      </footer>
    </div>
  );
};

export default FourthLayout;
