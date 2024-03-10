import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

export const GetProductModal = () => {
  const [contatoData, setContatoData] = useState({
    nome: '',
    companhia: '',
    telefone: '',
    produto: ''
  })

  return (<>
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center space-x-3 cursor-pointer p-5 hover:bg-[#30305cd7] rounded-lg">
          <p className=""> Contato </p>

          <span className="h-5">
            <svg className="w-full h-full" dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </span>
        </div>
      </DialogTrigger>

      <DialogContent className='border-none bg-[#0e0e1b] text-white'>
        <DialogHeader>
          <DialogTitle >
            Contratação de Serviçoes Digitais:
          </DialogTitle>
          <DialogDescription>
            Sites e Aplicativos: 
          </DialogDescription>
        </DialogHeader>

        <article className="border min-h-[10rem] rounded-lg">
          
        </article>
      </DialogContent>
    </Dialog>
  </>)
}