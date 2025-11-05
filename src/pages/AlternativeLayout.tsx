import logo from "@/assets/logo.png";
import montesiteLogo from "@/assets/montesite-logo.svg";
import { Link } from "react-router-dom";
import CompanyMap from "@/components/CompanyMap";

const AlternativeLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Navigation Toggle */}
      <div className="absolute top-6 right-6 z-10 flex gap-2">
        <Link 
          to="/"
          className="px-4 py-2 bg-card border border-border rounded-lg shadow-lg text-sm font-medium text-foreground hover:bg-secondary transition-all"
        >
          Layout 1
        </Link>
        <Link 
          to="/layout-3"
          className="px-4 py-2 bg-card border border-border rounded-lg shadow-lg text-sm font-medium text-foreground hover:bg-secondary transition-all"
        >
          Layout 3
        </Link>
        <Link 
          to="/layout-4"
          className="px-4 py-2 bg-card border border-border rounded-lg shadow-lg text-sm font-medium text-foreground hover:bg-secondary transition-all"
        >
          Layout 4
        </Link>
      </div>

      {/* Hero Section with Logo */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-block p-6 bg-card/80 backdrop-blur-sm rounded-3xl shadow-[var(--shadow-card)] border border-border">
              <img 
                src={logo} 
                alt="Zipline Tecnologia" 
                className="h-20 md:h-28 lg:h-36 w-auto object-contain mx-auto"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Zipline Tecnologia
              </h1>
              <div className="flex justify-center gap-2">
                <div className="h-1.5 w-16 bg-primary rounded-full"></div>
                <div className="h-1.5 w-24 bg-accent rounded-full"></div>
                <div className="h-1.5 w-16 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Phone Card */}
          <a 
            href="tel:08006033336"
            className="group bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-center space-y-4">
              <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">📞</div>
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                  Telefone
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  0800 603 3336
                </p>
              </div>
            </div>
          </a>

          {/* Address Card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1">
            <div className="text-center space-y-4">
              <div className="text-5xl mb-2">📍</div>
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                  Endereço
                </p>
                <p className="text-foreground md:text-lg leading-relaxed">
                  Rua do Acampamento nº 380<br />
                  Centro - Santa Maria - RS<br />
                  <span className="text-muted-foreground">CEP: 97050-002</span>
                </p>
              </div>
            </div>
          </div>

            {/* CNPJ Card */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="text-center space-y-4">
                <div className="text-5xl mb-2">🏢</div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                    CNPJ
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground font-mono">
                    04.693.497/0001-21
                  </p>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
              <div className="h-64 md:h-80 lg:h-96">
                <CompanyMap />
              </div>
            </div>
          </div>
        </div>

      {/* Footer */}
      <div className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-2">
            <p className="text-center text-muted-foreground text-sm md:text-base">
              Feito com
            </p>
            <img 
              src={montesiteLogo} 
              alt="MonteSite" 
              className="h-4 md:h-5 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeLayout;
