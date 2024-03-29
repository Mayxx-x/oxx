import { useQuery } from "react-query"
import { Separator } from "@/components/ui/separator"
import axios from "axios"

export const Portfolio = () => {

    const { data, isLoading, error } = useQuery('projects', async () => {
        try {
            const res = await axios.get('https://oxx-three.vercel.app/oxx/projects/', {
                headers: {
                    'api-key': 'xUp2jAz5hQZM#wCsKb',
                }
            });
            return res.data; // Acessar apenas os dados da resposta
        } catch (error) {
            throw new Error(`Erro ao obter dados: ${error.message}`);
        }
    })

    return (<>
        <div className="flex flex-col space-y-10 w-2/3 max-xl:w-full min-h-[50rem] rounded-xl border backdrop-blur border-slate-800 p-10">
            <header className="">
                <h1 className="oxx-title text-center text-white text-5xl font-thin">
                    Portfolio
                </h1>
            </header>

            {/* Grid View mostrando os Projetos salvos */}
            <section className="grid grid-cols-2 grid-rows-2 gap-10 w-full h-auto min-h-full max-[1800px]:grid-cols-1 max-[1800px]:grid-rows-none max-sm:p-1 border-slate-600 rounded p-10">
                {data?.length > 0 && data.map((project) => (
                    <div key={project.id}
                        onClick={() => { window.open(`${project?.link}`, '_blank') }}
                        className={`relative overflow-hidden h-[15rem] max-sm:h-[12rem] w-full group rounded-xl cursor-pointer border-slate-600 shadow-[0_0_2rem_#0004]`}
                    >
                        <div className="absolute inset-0 transition-transform duration-500 transform scale-100 group-hover:scale-125">
                            {/* Imagem de fundo do projeto */}
                            <img
                                src={project?.bg_public_url}
                                alt={project?.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute inset-0 grid items-end justify-center text-white p-4 font-thin bg-gradient-to-tr ">
                            {/* Titulo do Projeto */}
                            <h1 className="oxx-title text-3xl max-sm:text-xl bg-transparent p-3 rounded-xl">{project?.title}</h1>
                            <Separator />
                            {/* Descrição do Projeto */}
                            <p className="self-center font-normal bg-[#0005] p-3 rounded-xl backdrop-blur-sm max-sm:text-sm">{project?.description}</p>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="w-full h-full flex items-center justify-center">
                        <h2 className="text-white text-3xl font-thin"> Carregando.... </h2>
                    </div>
                )}
            </section>

            <footer className="">
                <p className="text-center text-slate-600"> "A criatividade é a inteligência se divertindo." - Albert Einstein </p>
            </footer>
        </div>
    </>)
}