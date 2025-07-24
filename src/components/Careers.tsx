import { 
  Users, 
  TrendingUp, 
  Heart, 
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Briefcase
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Crescimento Profissional",
      description: "Plano de carreira estruturado com oportunidades de crescimento e desenvolvimento."
    },
    {
      icon: Heart,
      title: "Qualidade de Vida",
      description: "Horários flexíveis, home office e programas de bem-estar para toda equipe."
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Programas de bonificação, participação nos lucros e premiações por performance."
    },
    {
      icon: Users,
      title: "Equipe Colaborativa",
      description: "Ambiente inclusivo e colaborativo onde todos contribuem para o sucesso."
    }
  ];

  const openPositions = [
    {
      title: "Analista de Processos Sênior",
      department: "Consultoria",
      location: "São Paulo - SP",
      type: "CLT",
      salary: "R$ 8.000 - R$ 12.000",
      description: "Responsável por mapear, analisar e otimizar processos empresariais dos clientes."
    },
    {
      title: "Desenvolvedor RPA",
      department: "Tecnologia",
      location: "Remoto",
      type: "CLT",
      salary: "R$ 10.000 - R$ 15.000",
      description: "Desenvolvimento e implementação de soluções de automação robótica de processos."
    },
    {
      title: "Gerente de Projetos",
      department: "Gestão",
      location: "São Paulo - SP",
      type: "CLT",
      salary: "R$ 12.000 - R$ 18.000",
      description: "Liderança de projetos de transformação digital e implementação de BPO."
    },
    {
      title: "Analista de Dados",
      department: "Business Intelligence",
      location: "Híbrido",
      type: "CLT",
      salary: "R$ 7.000 - R$ 10.000",
      description: "Análise de dados, criação de dashboards e relatórios para tomada de decisão."
    }
  ];

  return (
    <section id="carreiras" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              <Users size={16} className="mr-2" />
              Trabalhe Conosco
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 font-inter">
              <span className="text-foreground">Faça parte do</span>{" "}
              <span className="gradient-text">futuro</span>{" "}
              <span className="text-foreground">do BPO</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Junte-se à nossa equipe de profissionais talentosos e construa uma carreira 
              de sucesso em uma das empresas mais inovadoras do setor.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-blue">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Culture Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-in-up">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Nossa <span className="gradient-text">Cultura</span>
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Na AYM Solutions, acreditamos que pessoas talentosas são nosso maior ativo. 
                Criamos um ambiente onde a inovação floresce, o aprendizado é constante e 
                cada membro da equipe tem a oportunidade de fazer a diferença.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Ambiente de trabalho colaborativo e inclusivo",
                  "Treinamentos e certificações técnicas",
                  "Projetos desafiadores e inovadores",
                  "Flexibilidade e equilíbrio vida-trabalho"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://www.linkedin.com/company/aym-business-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center"
              >
                Conheça nossa equipe
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="animate-slide-in-right delay-200">
              <div className="glass rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-6 text-foreground">
                  Por que trabalhar na AYM?
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-primary" size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Crescimento Acelerado</h5>
                      <p className="text-sm text-muted-foreground">Empresa em rápida expansão com muitas oportunidades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary" size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Tecnologia de Ponta</h5>
                      <p className="text-sm text-muted-foreground">Trabalhe com as mais modernas ferramentas do mercado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="text-primary" size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Bem-estar</h5>
                      <p className="text-sm text-muted-foreground">Benefícios acima da média</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center animate-fade-in delay-300">
            <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Interessado em fazer parte da nossa equipe?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco para conhecer melhor nossa empresa e 
                descobrir as oportunidades de carreira disponíveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Entre em Contato
                </button>
                <a
                  href="https://www.infojobs.com.br/empresa-aym-business-solutions__727306.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass"
                >
                  InfoJobs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;