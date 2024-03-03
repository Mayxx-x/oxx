export class Product {
    id: any;

    constructor(id) {
        this.id = id;
    }

    static products = ['Sites', 'Aplicativos', 'Logos', 'Designs de Logomarcas', 'Segurança Cibernética', 'Marketing Digital Integrado'];
    static bgs = ['products/sites.jpg', 'products/app.jpg', 'products/logos.jpg', 'products/logomark.jpg', 'products/cybersecurity.jpg', 'products/marketing.jpg'];
    static descs = {
        0: 'Tenha um site moderno e responsivo para promover sua marca e alcançar os clientes em potencial.',
        1: 'Desenvolvemos aplicativos personalizados para iOS e Android que oferecem uma experiência excepcional para os usuários.',
        2: 'Crie uma identidade visual impactante com um logotipo único e profissional que represente a essência do seu negócio.',
        3: 'Nossa equipe de designers talentosos cria designs criativos e atrativos para promover sua marca e seus produtos.',
        4: 'Implementamos medidas de segurança cibernética para proteger sua empresa contra ameaças online e garantir a integridade dos seus dados.',
        5: 'Amplie sua presença online com nossa expertise em marketing digital. Desenvolvemos estratégias abrangentes, desde SEO e campanhas de mídia social até e-mail marketing, para impulsionar sua visibilidade e atrair mais clientes.'
    };

    static getName(id) {
        return Product.products[id];
    }

    static getBg(id) {
        return Product.bgs[id];
    }

    static getDesc(id) {
        return Product.descs[id];
    }
}