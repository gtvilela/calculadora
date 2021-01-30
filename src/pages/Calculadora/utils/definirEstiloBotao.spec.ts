import definirEstiloBotal from './definirEstiloBotao'

describe('definirEstiloBotao()', () => {
    it('Deve retornar o estilo para botões de número', () => {
        expect(definirEstiloBotal(2))
            .toEqual({ background: '#0a0a0a', color: '#808080' })
    })
    it('Deve retornar estilo para o botão de =', () => {
        expect(definirEstiloBotal('='))
            .toEqual({ background: '#d10028', color: '#fff' })
    })
    it('Deve restornar estilo para o botão de C', () => {
        expect(definirEstiloBotal('C'))
            .toEqual({ background: '#ea4900', color: '#fff' })
    })
    it('Deve retornar o estilo padrão dos botões', () => {
        expect(definirEstiloBotal('+'))
            .toEqual({ background: '#d3d3d3', color: '#0a0a0a' })
    })
})