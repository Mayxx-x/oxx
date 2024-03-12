import axios from 'axios'

const client_cad_url = 'https://oxx-api.vercel.app/oxx/contato'

export const CadastroUsuario = async () => {
    try {
        await axios.post(client_cad_url).then((data) => {
            return data
        })
    } catch (error) {
        return error
    }
}