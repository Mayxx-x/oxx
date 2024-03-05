import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"

export const ProductDetail = (prod) => {
    const [content, setContent] = useState(null)
    const optClasses = 'grid grid-cols-2 grid-rows-4 gap-x-5'

    const SitesAndApps = <>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="design-personalizado">
                <AccordionTrigger>Design Personalizado</AccordionTrigger>
                <AccordionContent>
                    Criamos designs exclusivos para atender às necessidades específicas do seu projeto.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="desenvolvimento-agil">
                <AccordionTrigger>Desenvolvimento Ágil</AccordionTrigger>
                <AccordionContent>
                    Adotamos metodologias ágeis para entregar resultados rapidamente e com eficiência.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="funcionalidades-avancadas">
                <AccordionTrigger>Funcionalidades Avançadas</AccordionTrigger>
                <AccordionContent>
                    Implementamos funcionalidades avançadas para proporcionar uma experiência excepcional aos usuários.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="responsividade-total">
                <AccordionTrigger>Responsividade Total</AccordionTrigger>
                <AccordionContent>
                    Garantimos que seu site ou aplicativo seja totalmente responsivo em todos os dispositivos.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="otimizacao-seo">
                <AccordionTrigger>Otimização para Motores de Busca (SEO)</AccordionTrigger>
                <AccordionContent>
                    Utilizamos práticas de SEO para aumentar a visibilidade do seu projeto nos motores de busca.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="integracao-redes-sociais">
                <AccordionTrigger>Integração com Redes Sociais</AccordionTrigger>
                <AccordionContent>
                    Facilitamos a integração com suas redes sociais favoritas para aumentar o alcance.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="seguranca-robusta">
                <AccordionTrigger>Segurança Robusta</AccordionTrigger>
                <AccordionContent>
                    Implementamos medidas de segurança robustas para proteger seus dados e usuários.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="suporte-continuo">
                <AccordionTrigger>Suporte Contínuo</AccordionTrigger>
                <AccordionContent>
                    Oferecemos suporte contínuo para garantir que seu projeto funcione sem problemas.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>

    if (prod === 'SitesAndApps') {
        setContent(SitesAndApps)
    }

    return (<>
        {SitesAndApps}
    </>)
}