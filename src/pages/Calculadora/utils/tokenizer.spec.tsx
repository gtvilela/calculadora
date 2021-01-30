import tokenizer from './tokenizer';

describe('tokenizer()', () => {
    it('Deve tokenizar expressão em notação polonesa', () => {
        expect(tokenizer('(+ 2 2 2)'))
            .toEqual(['(', '+', 2, 2, 2, ')'])
    })
})