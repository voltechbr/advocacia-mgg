/* ==========================================================
   PERSONALIZAÇÃO DO TEMPLATE — edite apenas este arquivo
   para trocar nome, textos e contatos. Cores: css/style.css (:root)
   ========================================================== */
window.SITE = {
  brand: { name: "MGG", suffix: "Advocacia e Consultoria Jurídica", monogram: "MGG" },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "O Escritório", href: "#escritorio" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Advogado", href: "#advogado" },
    { label: "Advogados", href: "#advogados" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Dúvidas", href: "#duvidas" }
  ],
  /* Botão do cabeçalho: abre o WhatsApp de contact.whatsapp com a mensagem abaixo.
     Se o número estiver vazio, o botão leva ao atendimento interativo (#atendimento). */
  navCta: { label: "Fale pelo WhatsApp", message: "Olá! Estou no site da MGG Advocacia e gostaria de falar com o escritório sobre o meu caso." },
  hero: {
    identity: "Advocacia e Consultoria Jurídica · Atendimento em todo o Brasil",
    title: "Cada caso começa por uma boa escuta.",
    text: "Atuamos com análise cuidadosa, linguagem clara e acompanhamento próximo, do primeiro atendimento à decisão final.",
    primary: { label: "Agendar uma conversa", href: "#atendimento", wa: "Olá, tudo bem? Vi o site da MGG Advocacia e gostaria de agendar uma conversa para entender como vocês podem me ajudar." },
    secondary: { label: "Conhecer o escritório", href: "#escritorio" }
  },
  about: {
    title: "Direito conduzido com método, clareza e proximidade.",
    intro: "A MGG Advocacia e Consultoria Jurídica atende clientes em todo o território nacional, de forma presencial ou virtual, com atenção, discrição e linguagem acessível, mantendo o cliente informado em cada etapa do caso.",
    philosophy: {
      heading: "Como trabalhamos",
      intro: "Princípios que orientam o atendimento, do primeiro contato ao encerramento do caso.",
      items: [
        { title: "Escuta", text: "Entender o contexto e o objetivo do cliente antes de propor qualquer caminho." },
        { title: "Clareza", text: "Explicar riscos, prazos e alternativas em linguagem direta, sem rodeios." },
        { title: "Responsabilidade", text: "Atuar com ética, sigilo e atenção a cada detalhe do processo." }
      ]
    },
    positioning: {
      statement: "Mais do que promessas, oferecemos clareza, honestidade e compromisso.",
      points: [
        "Cível, Trabalhista, Empresarial, Família e Consumidor",
        "Atendimento em todo o Brasil, presencial ou virtual",
        "Acompanhamento transparente de cada etapa"
      ]
    }
  },
  /* Áreas de atuação — para adicionar uma área, duplique um <li> em index.html */
  areas: {
    "heading": "Especialidades que acompanham as decisões importantes.",
    "intro": "Atuamos em cinco áreas do Direito: Cível, Trabalhista, Empresarial, de Família e do Consumidor, com orientação preventiva e acompanhamento atento.",
    "linkLabel": "Falar sobre este tema",
    "items": [
      {
        "icon": "civil",
        "title": "Direito Cível",
        "text": "Contratos, responsabilidade civil, propriedade e sucessões, com análise cuidadosa e orientação preventiva.",
        "tags": ["Contratos", "Responsabilidade civil", "Sucessões"],
        "wa": "Olá! Preciso de orientação em uma questão de Direito Cível, como contrato, indenização, imóvel ou herança. Podemos conversar?"
      },
      {
        "icon": "trabalhista",
        "title": "Direito Trabalhista",
        "text": "Orientação a empresas e trabalhadores sobre vínculos, rotinas e conflitos nas relações de trabalho.",
        "tags": ["Vínculo", "Rescisões", "Prevenção"],
        "wa": "Olá! Tenho uma dúvida trabalhista sobre vínculo, rescisão ou direitos. Poderiam me explicar como funciona o atendimento?"
      },
      {
        "icon": "empresarial",
        "title": "Direito Empresarial",
        "text": "Apoio jurídico à rotina e às decisões da empresa: contratos, relações societárias e comerciais.",
        "tags": ["Societário", "Contratos comerciais", "Consultoria"],
        "wa": "Olá! Represento uma empresa e gostaria de saber como funciona a assessoria jurídica empresarial da MGG, para contratos, sociedade e decisões do dia a dia."
      },
      {
        "icon": "familia",
        "title": "Direito de Família",
        "text": "Divórcio, guarda, pensão e planejamento sucessório, conduzidos com sensibilidade e discrição.",
        "tags": ["Divórcio", "Guarda", "Planejamento"],
        "wa": "Olá! Preciso de orientação em uma questão de Direito de Família (divórcio, guarda ou pensão). Como funciona o primeiro atendimento?"
      },
      {
        "icon": "consumidor",
        "title": "Direito do Consumidor",
        "text": "Orientação em conflitos de consumo: produtos e serviços com problema, cobranças indevidas e cancelamentos.",
        "tags": ["Cobranças indevidas", "Produtos e serviços", "Cancelamentos"],
        "wa": "Olá! Tive um problema com um produto ou serviço (cobrança indevida, cancelamento ou defeito) e queria saber se o escritório pode me orientar."
      }
    ],
    "cta": {
      "text": "Sua demanda não está na lista? Conte o seu caso e indicamos o melhor caminho.",
      "label": "Entrar em contato",
      "href": "#atendimento",
      "wa": "Olá! Meu caso não parece se encaixar diretamente nas áreas do site. Posso contar rapidamente a situação para vocês indicarem o melhor caminho?"
    }
  },
  /* Apresentação do advogado — seção exclusiva (#advogado). Textos baseados apenas em informações já presentes no site
     e nas fotos enviadas (nome e OAB conforme a placa da foto). Revise antes de publicar. */
  lawyer: {
    eyebrow: "O Advogado",
    name: "Dr. Marcos Giovane Gama",
    role: "Advogado",
    oab: "OAB/PR 77.387",
    p1: "Dr. Marcos Giovane Gama é advogado inscrito na OAB/PR sob o nº 77.387, com atuação na advocacia pautada pela ética profissional.",
    p2: "Seu compromisso é com o atendimento individualizado: cada caso é analisado com atenção ao contexto e aos objetivos do cliente, com orientação clara, responsável e sigilosa.",
    cta: { label: "Agendar uma conversa", href: "#atendimento", wa: "Olá! Gostaria de agendar uma conversa com o Dr. Marcos Giovane Gama sobre o meu caso." }
  },
  /* Equipe — OCULTA por padrão (nenhum dado profissional foi informado). Personalize nome, cargo, área e registro de cada profissional.
     Campos deixados vazios ("") não aparecem no site. */
  team: {
    show: false,   /* false = seção e item de menu "Advogados" ocultos. Mude para true quando houver dados reais da equipe. */
    eyebrow: "Equipe",
    heading: "Profissionais que acompanham cada caso de perto.",
    intro: "Uma equipe jurídica que acompanha cada caso com atenção, comunicação clara e responsabilidade profissional.",
    note: "",
    items: [
      { name: "Nome do Advogado", role: "Equipe jurídica", specialty: "", oab: "" },
      { name: "Nome da Advogada", role: "Equipe jurídica", specialty: "", oab: "" },
      { name: "Nome do Advogado", role: "Equipe jurídica", specialty: "", oab: "" },
      { name: "Nome da Advogada", role: "Equipe jurídica", specialty: "", oab: "" },
      { name: "Nome do Advogado", role: "Equipe jurídica", specialty: "", oab: "" },
      { name: "Nome da Advogada", role: "Equipe jurídica", specialty: "", oab: "" }
    ]
  },
  /* Atendimento interativo (guia inicial). Nenhuma mensagem é enviada pelo site:
     apenas o botão final abre o WhatsApp real (número em contact.whatsapp). */
  chat: {
    eyebrow: "Atendimento",
    heading: "Como podemos ajudar você hoje?",
    intro: "Escolha o assunto e veja como costuma ser o primeiro contato com o escritório, antes de falar com um advogado.",
    disclaimer: "Este guia oferece apenas uma orientação inicial. Nenhuma mensagem é enviada por aqui; o contato com a equipe só começa se você tocar no botão do WhatsApp.",
    steps: [
      "Escolha o assunto jurídico",
      "Receba uma orientação inicial",
      "Continue com a equipe no WhatsApp"
    ],
    directLabel: "Prefere falar direto?",   /* botões de WhatsApp/Instagram aparecem se contact.whatsapp / contact.instagram estiverem preenchidos */
    directMessage: "Olá! Prefiro falar direto por aqui: gostaria de uma orientação inicial sobre o meu caso.",
    tag: "Guia inicial",
    stripe: "Orientação inicial · não envia mensagens",
    inputHint: "Escolha uma das opções acima",
    agent: { name: "Atendimento MGG", status: "Orientação inicial" },
    greeting: [
      "Olá! Seja bem-vindo(a) à MGG Advocacia e Consultoria Jurídica.",
      "Sobre qual assunto você gostaria de conversar?"
    ],
    pick: "Escolha uma opção:",
    docsLabel: "Para agilizar, tenha em mãos:",
    nextLabel: "Quando quiser, a equipe continua a conversa pelo WhatsApp.",
    whatsappLabel: "Continuar no WhatsApp",
    whatsappNote: "Abre uma conversa real em nova aba",
    restartLabel: "Escolher outro assunto",
    topics: [
      {
        label: "Direito Cível",
        reply: "Posso orientar sobre contratos, indenizações, imóveis e sucessões. Em geral, começamos entendendo o que aconteceu e qual resultado você espera.",
        docs: ["Contratos ou documentos relacionados", "Cronologia resumida dos fatos", "Comprovantes e mensagens trocadas"],
        wa: "Olá! Pelo guia de atendimento do site, escolhi Direito Cível. Posso contar o que aconteceu e saber quais documentos levar?"
      },
      {
        label: "Direito Trabalhista",
        reply: "Atendemos empresas e trabalhadores com dúvidas sobre vínculo, rescisão e rotinas. Prazos importam bastante, por isso vale falar o quanto antes.",
        docs: ["Carteira de trabalho ou contrato", "Holerites e comprovantes", "Datas de início e fim do vínculo"],
        wa: "Olá! Pelo guia de atendimento do site, escolhi Direito Trabalhista. Tenho uma questão sobre relação de trabalho e queria saber os próximos passos."
      },
      {
        label: "Direito Empresarial",
        reply: "Apoiamos empresas em contratos, sociedades e decisões do dia a dia. Primeiro entendemos o porte do negócio e a urgência da demanda.",
        docs: ["Contrato social ou dados da empresa", "Contratos em discussão", "Descrição da situação atual"],
        wa: "Olá! Pelo guia de atendimento do site, escolhi Direito Empresarial. Gostaria de conversar sobre uma demanda da minha empresa."
      },
      {
        label: "Direito de Família",
        reply: "Tratamos divórcio, guarda, pensão e planejamento sucessório com sigilo e sensibilidade. A conversa inicial serve para ouvir você e explicar os caminhos possíveis.",
        docs: ["Documentos pessoais", "Certidão de casamento ou nascimento", "Informações sobre bens e filhos, se houver"],
        wa: "Olá! Pelo guia de atendimento do site, escolhi Direito de Família. Prefiro tratar com discrição; como posso começar?"
      },
      {
        label: "Direito do Consumidor",
        reply: "Orientamos sobre problemas com produtos, serviços, cobranças e cancelamentos. Em geral, começamos entendendo o que foi contratado e o que deu errado.",
        docs: ["Nota fiscal, contrato ou comprovante de compra", "Protocolos e mensagens trocadas com a empresa", "Cobranças ou faturas contestadas, se houver"],
        wa: "Olá! Pelo guia de atendimento do site, escolhi Direito do Consumidor. Tenho comprovantes e protocolos do problema e queria saber o que pode ser feito."
      },
      {
        label: "Outro assunto",
        reply: "Sem problema. Conte, em poucas palavras, o que está acontecendo, e a equipe indica o melhor caminho ou o profissional mais indicado.",
        docs: ["Um resumo do que aconteceu", "Documentos que considerar importantes"],
        wa: "Olá! Pelo guia de atendimento do site, escolhi Outro assunto. Minha situação é diferente das áreas listadas e gostaria de explicar para vocês indicarem o caminho."
      }
    ]
  },
  /* Perguntas frequentes — respostas de caráter geral.
     Para adicionar uma pergunta, copie um bloco { q, a } dentro de "items".
     "a" aceita um texto ou uma lista de textos (um parágrafo por item).
     Revise as respostas conforme a rotina do escritório e as regras de publicidade da OAB. */
  faq: {
    eyebrow: "Perguntas frequentes",
    heading: "Dúvidas comuns sobre o atendimento.",
    intro: "Respostas gerais sobre como costumamos conduzir o primeiro contato e o acompanhamento dos casos. Cada situação é única e merece uma análise individual.",
    singleOpen: true,      /* true = abrir uma resposta fecha a anterior | false = várias abertas ao mesmo tempo */
    defaultOpen: 0,        /* índice da pergunta aberta ao carregar (0 = primeira) | -1 = todas fechadas */
    note: "Conteúdo informativo e de caráter geral. Não substitui a análise do seu caso por um advogado.",
    cta: { title: "Não encontrou a sua dúvida?", text: "Conte brevemente o que está acontecendo e a equipe indica o melhor caminho.", label: "Falar com o escritório", href: "#atendimento", wa: "Olá! Li as dúvidas frequentes no site, mas ainda tenho uma pergunta sobre o meu caso. Podem me ajudar?" },
    items: [
      {
        q: "Como funciona o primeiro atendimento?",
        a: [
          "Começamos ouvindo você. Queremos entender o que aconteceu, o que você espera e quais prazos podem estar em jogo, antes de falar em qualquer caminho.",
          "Após o agendamento da consulta, realizamos uma conversa presencial ou virtual, na qual compreendemos as particularidades do seu caso e apresentamos as alternativas jurídicas, os caminhos possíveis e as orientações pertinentes, em linguagem simples."
        ]
      },
      {
        q: "Preciso levar documentos para a primeira conversa?",
        a: "Ajuda bastante, mas não é obrigatório para começar. Documentos pessoais, contratos, comprovantes e mensagens relacionados ao caso permitem uma análise mais precisa. Se você não tiver tudo à mão, conte o que for possível e a equipe orienta sobre o que reunir depois."
      },
      {
        q: "Como são definidos os honorários?",
        a: [
          "Os honorários dependem da natureza e da complexidade de cada caso e devem ser apresentados com clareza antes do início do trabalho.",
          "Valores, forma de pagamento e demais condições de contratação são esclarecidos pela equipe antes da formalização do atendimento."
        ]
      },
      {
        q: "O escritório garante o resultado do meu caso?",
        a: "Não. Nenhum advogado pode garantir resultado, porque a decisão final cabe a terceiros, como o Judiciário ou a outra parte envolvida. O que o escritório se compromete a oferecer é análise cuidadosa, orientação honesta sobre riscos e alternativas e acompanhamento atento a cada etapa."
      },
      {
        q: "Quanto tempo costuma levar um caso?",
        a: "Não há um prazo único. A duração varia conforme a área do direito, a complexidade da situação, a conduta das partes e o ritmo dos órgãos envolvidos. Por isso, preferimos explicar o que costuma influenciar o tempo em cada caso a prometer datas."
      },
      {
        q: "Minhas informações ficam em sigilo?",
        a: "O sigilo profissional é um dever do advogado. O que você compartilha durante o atendimento é tratado com confidencialidade e usado somente para a análise e a condução do seu caso."
      },
      {
        q: "Como acompanho o andamento do meu caso?",
        a: [
          "O acompanhamento é feito pelo advogado responsável, que informa as movimentações relevantes e esclarece dúvidas ao longo do caminho.",
          "Em caso de dúvida, você pode procurar a equipe pelos canais de contato do escritório, que responde conforme a natureza e a urgência de cada situação."
        ]
      }
    ]
  },
  /* Localização — foto da fachada em assets/img/fachada-desktop.jpg (3:2) e fachada-mobile.jpg (4:3).
     O endereço vem de contact.address; o botão abre o mapa com esse endereço. */
  location: {
    eyebrow: "Localização",
    heading: "Venha conhecer o escritório.",
    intro: "Nossa sede fica no Centro de Campo Largo (PR), mas atendemos em todo o Brasil, de forma presencial ou virtual. Agende uma conversa.",
    addressLabel: "Endereço",
    cta: "Como chegar"
  },

  /* CANAIS DE CONTATO — fonte única de WhatsApp, Instagram, telefone, e-mail e endereço.
     Usados no botão do cabeçalho, no atendimento e no rodapé. Preencha com os dados reais do escritório.
     whatsapp:  só dígitos com DDI+DDD, ex.: "5511999999999". Vazio = botões de WhatsApp inativos/ocultos.
     instagram: "@seuperfil" ou o link completo do perfil. Vazio = Instagram oculto.
     phone, email, address, hours: textos livres; viram link (tel:, mailto:, mapa) só quando forem dados reais.
     Linhas vazias ("") não aparecem no rodapé. */
  contact: {
    whatsapp: "554199311590",   /* +55 41 9931-1590 */
    whatsappMessage: "Olá! Encontrei o contato da MGG no rodapé do site e gostaria de falar com o escritório sobre o meu caso.",   /* link do rodapé */
    whatsappDisplay: "(41) 9931-1590",
    instagram: "",
    phone: "(41) 3032-1879",   /* telefone complementar (fixo) — separado do WhatsApp */
    email: "",
    address: "Rua XV de Novembro, 1554, Centro, Campo Largo - PR, CEP 83601-030",
    hours: ""
  },

  /* Rodapé — os links de navegação, as áreas e os contatos vêm de "nav", "areas" e "contact".
     Dados institucionais: preencha com informações reais (itens vazios não aparecem). */
  footer: {
    about: "Advocacia e consultoria jurídica com atendimento em todo o território nacional, presencial ou virtual, com atuação em Direito Cível, Trabalhista, Empresarial, de Família e do Consumidor. Atendimento próximo e linguagem clara.",
    navTitle: "Navegação",
    areasTitle: "Atuação",
    contactTitle: "Contato",
    socialTitle: "Redes sociais",
    /* Redes sociais adicionais. O Instagram vem de contact.instagram e aparece primeiro.
       Informe em href o perfil real (vazio oculta a rede). Ícones: linkedin, facebook, youtube */
    social: [
      { label: "LinkedIn",  icon: "linkedin",  href: "" },
      { label: "Facebook",  icon: "facebook",  href: "" }
    ],
    /* Informações institucionais (linhas vazias não aparecem) */
    institutional: [
      { label: "Razão social", value: "" },
      { label: "CNPJ", value: "" },
      { label: "Registro na OAB", value: "" },
      { label: "Responsável técnico", value: "" }
    ],
    /* Links legais opcionais. Exemplo: { label: "Política de privacidade", href: "privacidade.html" } */
    legal: [],
    notice: "Este site tem caráter exclusivamente informativo, em conformidade com as normas da OAB sobre publicidade na advocacia. Nenhum conteúdo constitui aconselhamento jurídico ou garantia de resultado.",
    rights: "Todos os direitos reservados.",   /* o ano é atualizado automaticamente */
    backToTop: "Voltar ao topo"
  }
};
