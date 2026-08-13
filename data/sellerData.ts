export type ActionIcon = "whatsapp" | "catalog" | "instagram";

export type SellerAction = {
  icon: ActionIcon;
  title: string;
  subtitle: string;
  href: string;
  ariaLabel: string;
};

export type SellerData = {
  name: string;
  role: string;
  photo: string;
  motorcycleImage: string;
  slogan: string;
  whatsapp: string;
  catalog: string;
  instagram: string;
  address: string;
  latitude: string;
  longitude: string;
  dealerName: string;
  logo: string;
  profileMessage: string;
  locationTitle: string;
  mapsButtonLabel: string;
  shareButtonLabel: string;
  shareTitle: string;
  shareText: string;
  shareSuccessMessage: string;
  copySuccessMessage: string;
  shareErrorMessage: string;
  qrCodeLabel: string;
  qrCodeUrl: string;
  pageUrl: string;
  seoDescription: string;
  actions: SellerAction[];
};

export const sellerData: SellerData = {
  name: "Yan Mota",
  role: "Consultor de vendas",
  photo: "/yanperfil.png",
  motorcycleImage: "/bajajmoto.png",
  slogan: "Sua próxima aventura começa aqui.",
  whatsapp:
    "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Yan!%20Quero%20conhecer%20as%20motocicletas.",
  catalog: "https://www.bajaj.com.br/pt-BR/motocicletas",
  instagram: "https://www.instagram.com/bajajdobrasil/",
  address: "Alameda São Boaventura, 512 - Fonseca, Niterói - RJ, 24120-191",
  latitude: "-22.8810625",
  longitude: "-43.0969375",
  dealerName: "Euroville Bajaj Niterói",
  logo: "/bajajlogo.png",
  profileMessage:
    "Estou aqui para ajudar você a encontrar a motocicleta ideal.",
  locationTitle: "Onde me encontrar",
  mapsButtonLabel: "Abrir no Google Maps",
  shareButtonLabel: "Compartilhe meu cartão",
  shareTitle: "Cartão digital de Yan Mota",
  shareText: "Fale com Yan Mota, consultor da Euroville Bajaj Niterói.",
  shareSuccessMessage: "Cartão compartilhado!",
  copySuccessMessage: "Link copiado!",
  shareErrorMessage: "Não foi possível compartilhar.",
  qrCodeLabel: "Aponte a câmera e salve meu contato",
  qrCodeUrl: "https://w.app/vendedoryanmotabajaj",
  pageUrl: "https://seu-dominio.com.br/yan-mota",
  seoDescription:
    "Cartão digital de Yan Mota, consultor de vendas da Euroville Bajaj Niterói. Conheça modelos, catálogo e entre em contato.",
  actions: [
    {
      icon: "whatsapp",
      title: "Fale comigo",
      subtitle: "Atendimento rápido pelo WhatsApp",
      href: "https://w.app/vendedoryanmotabajaj",
      ariaLabel: "Conversar com Yan pelo WhatsApp",
    },
    {
      icon: "catalog",
      title: "Veja o catálogo",
      subtitle: "Encontre a moto que combina com você",
      href: "https://bajaj.com.br/motos/",
      ariaLabel: "Abrir catálogo de motocicletas",
    },
    {
      icon: "instagram",
      title: "Siga no Instagram",
      subtitle: "Novidades, lançamentos e ofertas",
      href: "https://www.instagram.com/yanbajaj.rj/",
      ariaLabel: "Abrir perfil no Instagram",
    },
  ],
};
