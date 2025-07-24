import { 
  Cpu, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Gestão de Equipes",
      description: "Nossos líderes experientes treinam e desenvolvem agentes para oferecer atendimento de excelência através de chat, telefone e email.",
      features: ["Treinamento Especializado", "Liderança Qualificada", "Atendimento Multicanal", "Desenvolvimento Contínuo"],
      highlight: "Excelência em atendimento ao cliente"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Dashboards inteligentes e relatórios analíticos para tomada de decisão baseada em dados.",
      features: ["Dashboards Interativos", "Relatórios Customizados", "Análise de Dados", "Insights Acionáveis"],
      highlight: "Decisões 5x mais rápidas"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Nossa equipe de TI garante operação contínua e suporte técnico sempre que necessário. Estamos sempre disponíveis.",
      features: ["Equipe de TI Interna", "Suporte Técnico", "Monitoramento", "Disponibilidade Total"],
      highlight: "Suporte técnico sempre disponível"
    },
    {
      icon: Shield,
      title: "Segurança & Compliance",
      description: "Implementação de protocolos de segurança e conformidade com regulamentações do setor.",
      features: ["LGPD Compliance", "ISO 27001", "Auditoria de Segurança", "Backup Automático"],
      highlight: "100% de conformidade garantida"
    },
    {
      icon: Cpu,
      title: "Processos Otimizados",
      description: "Implementação de tecnologias avançadas para otimizar operações e aumentar eficiência.",
      features: ["Análise de Processos", "Implementação", "Monitoramento", "Otimização Contínua"],
      highlight: "Até 80% de melhoria na eficiência"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Diagnóstico",
      description: "Análise completa dos processos atuais e identificação de oportunidades."
    },
    {
      step: "02", 
      title: "Estratégia",
      description: "Desenvolvimento de plano personalizado com objetivos claros e métricas."
    },
    {
      step: "03",
      title: "Implementação",
      description: "Execução gradual com acompanhamento contínuo e ajustes necessários."
    },
    {
      step: "04",
      title: "Otimização",
      description: "Monitoramento constante e melhorias contínuas para máxima eficiência."
    }
  ];

  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              <Zap size={16} className="mr-2" />
              Nossos Serviços
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 font-inter">
              <span className="text-foreground">Soluções</span>{" "}
              <span className="gradient-text">completas</span>{" "}
              <span className="text-foreground">em BPO</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça nossa expertise em Business Process Outsourcing e as áreas 
              onde atuamos com excelência operacional.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 [&>*:nth-child(4)]:md:col-start-1 [&>*:nth-child(4)]:lg:col-start-auto [&>*:nth-child(5)]:md:col-start-2 [&>*:nth-child(5)]:lg:col-start-auto [&>*:nth-child(4)]:md:justify-self-center [&>*:nth-child(5)]:md:justify-self-center [&>*:nth-child(4)]:lg:justify-self-auto [&>*:nth-child(5)]:lg:justify-self-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass rounded-3xl p-8 h-full hover-lift hover-glow transition-all duration-500">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-blue">
                    <service.icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-primary flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="bg-primary/10 rounded-xl p-4 mb-6">
                    <div className="text-primary font-semibold text-sm">
                      {service.highlight}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="animate-fade-in delay-300">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Como <span className="gradient-text">trabalhamos</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossa metodologia comprovada garante resultados consistentes e transformação efetiva.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-blue">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;