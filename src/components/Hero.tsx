import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>
      
      {/* Hero Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float delay-200"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl float delay-500"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg float delay-300"></div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-in-up">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
                  <Zap size={16} className="mr-2" />
                  Inovação em BPO
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 font-inter">
                <span className="gradient-text">Transformamos</span>
                <br />
                <span className="text-foreground">processos com</span>
                <br />
                <span className="text-primary">BPO inteligente</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Uma empresa sólida e consolidada no mercado de BPO, com foco em 
                excelência operacional e desenvolvimento de talentos.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="btn-primary group"
                >
                  Conheça a AYM
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Profissionais</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">2023</div>
                  <div className="text-sm text-muted-foreground">Fundada</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative animate-slide-in-right delay-300">
              {/* Main Card */}
              <div className="relative glass rounded-3xl p-8 hover-lift">
                <div className="absolute top-4 right-4 pulse-dot w-3 h-3 bg-primary rounded-full"></div>
                
                <div className="mb-6">
                  <TrendingUp className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Crescimento Exponencial</h3>
                  <p className="text-muted-foreground">
                    Impulsionamos o crescimento dos nossos clientes através de soluções BPO inovadoras.
                  </p>
                </div>

                {/* Mini Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-xl p-4 text-center">
                    <Users className="text-primary mx-auto mb-2" size={24} />
                    <div className="text-sm font-semibold">Equipe Especializada</div>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 text-center">
                    <Zap className="text-primary mx-auto mb-2" size={24} />
                    <div className="text-sm font-semibold">Tecnologia Avançada</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 float delay-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <span className="text-sm font-semibold">IA Integrada</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 float delay-400">
                <div className="text-center">
                  <div className="text-primary font-bold text-lg">24/7</div>
                  <div className="text-xs text-muted-foreground">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;