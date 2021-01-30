import { render } from '@testing-library/react'
import Botao from './Botao'

describe('<Botao>', () => {
    it('Deve executar função no evento de onClick', () => {
        
        const handleOnClick = jest.fn();
        
        render(<Botao onClick={}/>)
    })
})