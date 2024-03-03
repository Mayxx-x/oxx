import { MainHeader } from "../content/MainHeader"
import { Portfolio } from "../content/Portfolio"

export default function Home() {
    return (<>
        <main className="h-full items-center justify-center min-w-screen min-h-screen bg-[#0e0e1b5e] space-y-10">
            {/* Header Principal */}
            <MainHeader />

            <section className="flex flex-col justify-center items-center space-y-10 w-11/12 max-lg:w-full mx-auto">

                {/* Segundo Cabeçalho */}
                <div className="oxx-header w-11/12 max-xl:w-full rounded-full bg-[url('/luxurious_spaceship.jpg')] bg-center backdrop-blur max-sm:h-[10rem] sm:h-[15rem] xl:h-[20rem] 2xl:h-[30rem] shadow-[inset_0_0_1rem_#000]">
                    <figure className="bg-[url('/products_banner.png')] bg-cover min-h-full min-w-full rounded-full"></figure>
                </div>

                {/* Conteudo Principal da Pagina */}
                <Portfolio />

                {/* Footer Princial */}
                <footer className="border min-w-screen w-full h-20 border-slate-800">

                </footer>
            </section>
        </main>
    </>)
}