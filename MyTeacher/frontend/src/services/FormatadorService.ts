export const FormatadorService = {
    valorMonetario(valor: number): string {
        return valor
                .toLocaleString(
                    'pt-BR',
                    { 
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL' 
                    }
                )
    },

    limitarTexto(texto: string, tamanhoMaximo = 50): string {
        if (texto.length < tamanhoMaximo) {
            return texto
        } else {
            return texto.slice(0, tamanhoMaximo) + '...'
        }
    }
}