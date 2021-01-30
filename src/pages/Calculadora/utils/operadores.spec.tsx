import operadores from './operadores'

describe('operadores()', () => {
    it('Deve efetuar a operação de adição na lista', () => {
        expect(operadores['+']([2,2,2,2]))
            .toEqual(8)
    })
    it('Deve efetuar a operação de subtração na lista', () => {
        expect(operadores['-']([100,10,10,10]))
            .toEqual(70)
    })
    it('Deve efetuar a operação de multiplicação na lista', () => {
        expect(operadores['*']([2,2,2]))
            .toEqual(8)
    })
    it('Deve efetuar a operação de divisão na lista', () => {
        expect(operadores['/']([100,2,2]))
            .toEqual(25)
    })
})