import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";



import { 
    ListaStyled,
    ListaVazia,
    Foto,
    Informacoes,
    ItemLista,
    Nome,
    Valor,
    Descricao,
} from "./Lista.style";

interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void,
}

const Lista = (props: ListaProps) => {
    return (
        <>
            {props.professores.length > 0 ? (
                <ListaStyled>
                {props.professores.map((elem) => 
                    <ItemLista key={elem.id}>
                        <Foto src={elem.foto}></Foto>
                        <Informacoes>
                            <Nome>{elem.nome} @{elem.nickname}</Nome>
                            <Valor>{ FormatadorService.valorMonetario(elem.valor_hora) } por hora</Valor>
                            <Descricao>{ FormatadorService.limitarTexto(elem.descricao) }</Descricao>
                            <Button
                                onClick={() => props.onSelect(elem)}
                                sx={{width: '70%'}}
                            >
                                Marcar Aula com {elem.nome}
                            </Button>
                        </Informacoes>
                    </ItemLista>
                )}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum professor na lista</ListaVazia>
            )}
        </>
    )
}

export default Lista;