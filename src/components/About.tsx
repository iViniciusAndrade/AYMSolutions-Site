import { Award, Target, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Foco no Seu Crescimento",
      description: "Cada estratégia é desenvolvida para acelerar sua carreira e atingir seus objetivos profissionais."
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Utilizamos as mais avançadas tecnologias para otimizar processos e maximizar eficiência."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Mais de 50 profissionais que cresceram conosco, desenvolvendo expertise através de treinamentos contínuos."
    },
    {
      icon: Award,
      title: "Excelência Operacional",
      description: "Padrões de qualidade elevados em todos os nossos serviços e processos."
    }
  ];

  const achievements = [
    { label: "Profissionais", value: "50+", color: "text-primary" },
    { label: "Anos de Mercado", value: "2+", color: "text-primary" },
    { label: "Projetos em ativa", value: "4+", color: "text-primary" },
    { label: "Satisfação", value: "100%", color: "text-primary" }
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              <Award size={16} className="mr-2" />
              Sobre a AYM Solutions
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 font-inter">
              <span className="gradient-text">Excelência</span> em{" "}
              <span className="text-foreground">BPO desde 2023</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma empresa consolidada no mercado de Business Process Outsourcing, 
              com foco na excelência operacional e desenvolvimento de profissionais talentosos.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="animate-slide-in-up">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Transformamos desafios em oportunidades
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Somos uma empresa consolidada no segmento de BPO, reconhecida pela qualidade 
                dos nossos serviços e pelo desenvolvimento contínuo de nossos profissionais. 
                Nossa estrutura sólida oferece estabilidade e oportunidades de crescimento.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Empresa sólida e consolidada no mercado",
                  "Equipe formada e capacitada internamente",
                  "Ambiente de trabalho colaborativo",
                  "Foco no desenvolvimento profissional"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className="animate-slide-in-right delay-200">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-6 text-center hover-lift"
                  >
                    <div className={`text-3xl font-bold mb-2 ${achievement.color}`}>
                      {achievement.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-blue">
                  <value.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;