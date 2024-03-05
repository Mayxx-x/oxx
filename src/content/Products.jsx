import { Separator } from "@/components/ui/separator"
import { ProductDetail } from "./mod/ProductsDetails"

export const Products = () => {
    const productClass = 'hover:border-white duration-500 rounded-lg'

    return (<>
        <section className="max-xl:px-5">
            <figure className="products-section-title">
                <header className="flex items-center space-y-5 text-white whitespace-nowrap space-x-5 max-sm:space-x-2">
                    {/* Header Title with Icon */}
                    <span className="w-">
                        {/* <svg className="h-10 aspect-square" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"></path>
                                </svg> */}
                    </span>

                    <h1 className="oxx-title text-white font-thin text-4xl"> Produtos </h1>

                    <marquee className="overflow-x-scroll self-end">
                        Alcance excelência online com a OXX! Desenvolvedores full stack prontos para dar vida à sua visão digital. Invista em qualidade para o seu negócio agora!
                    </marquee>
                </header>

                <Separator />


                {/* Content */}
                <p className='products-heading text-center mx-auto max-sm:w-11/12'>
                    Alcance excelência online com a OXX! Desenvolvedores full stack prontos para dar vida à sua visão digital. Invista em qualidade para o seu negócio agora!
                </p>
            </figure>

            {/* Container de Produtos OXX */}
            <article className="w-full grid grid-cols-2 gap-5 p-10 max-sm:p-1 max-lg:grid-rows- text-white
                [&>*]:border [&>*]:border-slate-800 [&>*]:cursor-pointer"
            >
                {/* Sessao Sites e Aplicativos */}
                <div className={`w-full col-span-2 text-xl h-[auto] bg-gradient-to-r from-[#0e0e1b] to-[#101020] rounded-lg transition-all ${productClass} bg-[url('https://ddgimgs-f43e.kxcdn.com/1758762/tmpqqk_9ac63beb657321b4507d45fa0de34b7750d547b7.jpg')] bg-cover bg-bottom `}>

                    <div className="backdrop-blur p-5 rounded-lg bg-[#0e0e1b8a]">
                        <h1 className="text-3xl oxx-title"> Sites e Aplicativos </h1>


                        <ul className="max-md:grid-cols-1 p-5 text-[11pt] grid grid-cols-2 grid-rows-4 list-disc justify-center">
                            <li>Design Personalizado</li>
                            <li>Desenvolvimento Ágil</li>
                            <li>Funcionalidades Avançadas</li>
                            <li>Responsividade Total</li>
                            <li>Otimização para Motores de Busca (SEO)</li>
                            <li>Integração com Redes Sociais</li>
                            <li>Segurança Robusta</li>
                            <li>Suporte Contínuo</li>
                        </ul>
                    </div>
                </div>
                {/*  */}
                <div className={`col-span-1 max-lg:col-span-full bg-[url("https://neural.love/cdn/ai-photostock/1eeb78ae-4e6d-6748-b09c-59515bde4ae0/0.jpg?Expires=1714521599&Signature=5avugxxrSW-DxnXBbB1Ia33UAZ4Cm~HvaSzazeS4bkuN1bwufzzjZraUDu~ybzxK9z9fVYqYJwidVUCTTx53AvjUfNZHMwxDzUMSuTkXCYDHfjCQalMoz4230R5cY--pK5iEFl-4S4W-DmDaICmhQG5Z4524-emA0pt8U33-CSCHb7Lc7-kfzXxuckA102eNJdhuFETfQhqjbm1GufT~VaIUZZjLJ~h519FHhPzE2bPmjVMp7rvoQFEXb61gHRa-NgR22-BLkejesk6WuzdmZEY553eykyS9gwY1zYR9o~OQEMSXQaXeIBJF7PUwNGZJIGcfgbO1M6mXyR55hjMnsA__&Key-Pair-Id=K2RFTOXRBNSROX")] h-[auto] bg-cover rounded-lg ${productClass}`}>
                    <div className="backdrop-blur h-full p-5 rounded-lg bg-[#0e0e1b8a]">

                        <h1 className="text-2xl oxx-title"> Sistemas Corporativos </h1>

                        <ul className="max-md:grid-cols-1 p-5 text-[10pt] gap-3 grid grid-cols-2 grid-rows-4 list-disc justify-center">
                            <li>Integração de Processos Empresariais</li>
                            <li>Gerenciamento de Dados Empresariais</li>
                            <li>Segurança da Informação</li>
                            <li>Experiência do Usuário (UX) Corporativa</li>
                            <li>Escalabilidade e Flexibilidade</li>
                            <li>Suporte e Manutenção Contínuos</li>
                            <li>Integração com Tecnologias Existentes</li>
                        </ul>
                    </div>

                </div>
                {/* Inovações Tecnologias */}
                <div className={`col-span-1 max-lg:col-span-full h-[auto] bg-[url("https://neural.love/cdn/ai-photostock/1eec129d-3b8f-66ec-b965-7f077b440cc3/0.jpg?Expires=1714521599&Signature=FAwfU4paxA7v8dfZtIOmy33DfUfBLDFoZKlW4aA-lzok8MMGQF8jFOyjbvIYmRKLx-ZIYEuNmExEdsqCPQdHZiX4BUZ3YWm-d2uyzj5rDLdtf1wrzokKCrB7WWPGZjGlf7D7MjoeDGpPZZq0D6XHuVv57SPsx-buLC5O9XINcmd0yDrjV04eLdJgHHjd4cpv1A-e7SMzpt26PRg~VJ4e7PkdZ9h7vj4p863fhtaV7hmigOH-nhbRoRwPgluDCdyNWdv33IwbUUzg9xGqw6qZpZIUEjzu7EfThSv~ZokINxdvomQw~y8fKsFfWIzexotEU6CL1VNoaw~jKfPhgD7lbw__&Key-Pair-Id=K2RFTOXRBNSROX")] ${productClass}`}>
                    <div className="backdrop-blur h-full p-5 rounded-lg bg-[#0e0e1b8a]">

                        <h1 className="text-2xl oxx-title"> Inovações Tecnologias </h1>

                        <ul className="max-md:grid-cols-1 p-5 text-[10pt] gap-3 grid grid-cols-2 grid-rows-4 list-disc justify-center">
                            <li>Inteligência Artificial (IA)</li>
                            <li>Blockchain e Criptomoedas</li>
                            <li>IoT (Internet das Coisas)</li>
                            <li>Computação Quântica</li>
                            <li>5G e Conectividade Avançada</li>
                            <li>Cibersegurança Avançada</li>
                            <li>Tecnologias Emergentes</li>
                        </ul>


                    </div>
                </div>
            </article>
        </section>
    </>)
}