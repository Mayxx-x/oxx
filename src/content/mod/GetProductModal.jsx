import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState, useEffect } from "react"
import { CadastroUsuario } from '../../services/repo'
import { useMutation } from "react-query"
import axios from "axios"

export const GetProductModal = () => {
  const [contatoData, setContatoData] = useState({
    nome: '',
    company: undefined,
    email: '',
    telefone: '',
    product: ''
  })
  const [isError, setIsError] = useState(false)

  const isValid = () => contatoData.nome !== '' && contatoData.nome.length > 2

  const handleSubmit = async () => { //* Handler de Envio

    if (isValid) {
      try {
        console.log('Enviando: ', contatoData);
        await axios.post('https://oxx-api.vercel.app/oxx/contatos/', contatoData, {
          headers: {
            'api-key': 'xUp2jAz5hQZM#wCsKb',
          }
        }).then((data) => {
          toast(`Contato Enviado`)
        })
      } catch (error) {
        console.error('erro ao enviar contato: ', error)
      }
    } else {

      setIsError(true)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIsError(false)
    setContatoData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSelect = (value) => {
    setContatoData({
      ...contatoData,
      product: value
    })
  }

  useEffect(() => {
    // Função para formatar o número de telefone
    const formatarTelefone = (telefone) => {
      // Remove todos os caracteres não numéricos
      const numerosApenas = telefone.replace(/\D/g, '');

      // Aplica a formatação correta
      if (numerosApenas.length === 11) {
        return `(${numerosApenas.slice(0, 2)})${numerosApenas.slice(2, 7)}-${numerosApenas.slice(7)}`;
      } else if (numerosApenas.length === 10) {
        return `(${numerosApenas.slice(0, 2)})${numerosApenas.slice(2, 6)}-${numerosApenas.slice(6)}`;
      }

      // Retorna o número original se não estiver no formato esperado
      return telefone;
    };

    // Atualiza o estado com o número de telefone formatado
    setContatoData(() => ({
      ...contatoData,
      telefone: formatarTelefone(contatoData.telefone)
    }));
  }, [contatoData.telefone]);

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

      <DialogContent className='border-none bg-[#0e0e1b88] backdrop-blur text-white'>
        <DialogHeader>
          <DialogTitle >
            Solicitação de Desenvolvimento de Aplicativos
          </DialogTitle>
          <DialogDescription>
            Escolha o tipo de serviço desejado:
          </DialogDescription>
        </DialogHeader>

        <article className="shadow-xl bg-[#3838380e] border-[1px_solid_#0e0e1b] min-h-[30rem] rounded-lg p-10">

          <div className="flex flex-col space-y-5">
            <div>
              <Label htmlFor="nome">Nome*</Label>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={contatoData.nome}
                onChange={handleChange}
                placeholder="Seu Nome"
                className={`border border-slate-600 ${isError && 'border-red-500 ring-2 ring-red-700'}`}
                required
              />
              <p className="text-xs h-1 mt-1"> {isError && 'Insira um nome válido'} </p>
            </div>

            {/* <div>
              <Label htmlFor="companhia">Companhia:</Label>
              <Input
                type="text"
                id="companhia"
                name="companhia"
                value={contatoData.company}
                onChange={handleChange}
                placeholder="Nome da Companhia"
                className='border border-slate-600'
              />
              <h2> Sem Companhia </h2>
            </div> */}

            <div>
              <Label htmlFor="email"> Email* </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={contatoData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`border border-slate-600 ${isError && 'border-red-500 ring-2 ring-red-700'} `}
                required
              />
              <p className="text-xs h-1 mt-1"> {isError && 'Insira um email válido'} </p>
            </div>

            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                type="tel"
                id="telefone"
                name="telefone"
                value={contatoData.telefone}
                onChange={handleChange}
                placeholder="Seu Número de Telefone"
                className='border border-slate-600'
              />
            </div>

            <div>
              <Label htmlFor="produto">Produto:</Label>

              <Select name='produto' onValueChange={(value) => handleSelect(value)}>
                <SelectTrigger className={`w-full ${isError && 'border-red-500 ring-2 ring-red-700'}`}>
                  <SelectValue placeholder="Tipo de Produto" />
                </SelectTrigger>
                <SelectContent className='bg-transparent backdrop-blur-sm text-white'>
                  <SelectGroup>
                    <SelectLabel className='text-lg'> Desenvolvimento de Apps </SelectLabel>
                    <SelectItem value="site"> Site </SelectItem>
                    <SelectItem value="app"> Aplicativo </SelectItem>
                    <SelectItem value="site+app"> Site + Aplicativo </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p className="text-xs h-1 mt-1"> {isError && 'Selecione um produto'} </p>
            </div>

            <button onClick={() => handleSubmit()} className="w-full rounded-lg shadow bg-[#1f162b] transition hover:bg-[#2f2142] duration-500 p-3" type="submit">Enviar</button>
          </div>

        </article>
      </DialogContent>
    </Dialog>
  </>)
}