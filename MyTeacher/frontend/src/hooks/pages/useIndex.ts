import { useEffect, useState } from 'react'

import { Professor } from '../../@types/professor'
import { ApiService } from '../../services/ApiService'

const professoresCollection: Professor[] = [
    {
        id: 1,
        nome: 'Saulo Gomes',
        nickname: 'saulobr88',
        foto: 'https://github.com/saulobr88.png',
        valor_hora: 100.00,
        descricao: 'Aulas de Computação'
    },
    {
        id: 2,
        nome: 'Ruslan Zharkov',
        nickname: 'ruslanzharkov',
        foto: 'https://github.com/ruslanzharkov.png',
        valor_hora: 100.00,
        descricao: 'JavaScript/TypeScript, React'
    },
    {
        id: 3,
        nome: 'Matthew Cheely',
        nickname: 'MattCheely',
        foto: 'https://github.com/MattCheely.png',
        valor_hora: 100.00,
        descricao: 'Elm & TypeScript'
    },
    {
        id: 4,
        nome: 'Stephen Celis',
        nickname: 'stephencelis',
        foto: 'https://github.com/stephencelis.png',
        valor_hora: 100.00,
        descricao: 'Working on @pointfreeco: https://www.pointfree.co/'
    },
    {
        id: 5,
        nome: 'Saurav Mukherjee',
        nickname: 'SauravMukherjee44',
        foto: 'https://github.com/SauravMukherjee44.png',
        valor_hora: 100.00,
        descricao: 'Google DSC Lead\'22 | Open Source Mentor | @Azure Dev Lead | Coding Tutor at @ConnectBud | Web Developer | Content Creator @youtube'
    },
    {
        id: 6,
        nome: 'Florian Roth',
        nickname: 'Neo23x0',
        foto: 'https://github.com/Neo23x0.png',
        valor_hora: 100.00,
        descricao: '#DFIR #Python #YARA #Golang #SIEM #SOC #Sigma #Malware'
    },
    {
        id: 7,
        nome: 'Shahed Nasser',
        nickname: 'shahednasser',
        foto: 'https://github.com/shahednasser.png',
        valor_hora: 100.00,
        descricao: 'Technical Writer | Full-stack developer'
    },
]

export const useIndex = () => {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null)
    const [mensagem, setMensagem] = useState('')

    const validarDadosAula = () => {
        return nome.length > 0 && email.length > 0
    }

    const limparFormulario = () => {
        setNome('')
        setEmail('')
    }

    const resetAll = () => {
        setProfessorSelecionado(null)
        setNome('')
        setEmail('')
    }

    const marcarAula = () => {
        if (professorSelecionado !== null) {
            if (validarDadosAula()) {
                ApiService.post(
                    `/professores/${professorSelecionado.id}/aulas`, 
                    {
                        nome,
                        email,
                    }
                )
                .then( resposta => {
                    resetAll()
                    setMensagem('Cadastrado com sucesso!')
                })
                .catch(error => {
                    const msg = `Erro: ${error.response?.data.message}`
                    setMensagem(msg)
                })
            } else {
                setMensagem('Preencha os dados corretamente')
            }
        }
    }

    useEffect(() => {
        // ApiService.get('/posts')
        ApiService.get('/professores/')
        .then((resposta) => {
            setListaProfessores(resposta.data)
            // console.log(resposta.data)
        })
    }, [])

    useEffect(() => {
        if (professorSelecionado === null) {
            limparFormulario()
        }
    }, [professorSelecionado])

    return {
        listaProfessores,
        setListaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        professorSelecionado,
        setProfessorSelecionado,
        marcarAula,
        mensagem,
        setMensagem,
        resetAll,
        limparFormulario,
    }
}