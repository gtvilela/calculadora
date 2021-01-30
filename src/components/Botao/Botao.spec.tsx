import { fireEvent, render, screen } from '@testing-library/react'
import Botao from './Botao'

describe('<Botao>', () => {
    it('Deve executar função no evento de onClick', () => {
        
        const handleOnClick = jest.fn();
        
        render(<Botao 
                onClick={handleOnClick}
                label = "test_label"
                icon=""
                />)
        fireEvent.click(screen.getByText('test_label'))

        expect(handleOnClick).toBeCalled();
    })

    it('Deve exibir o ícone', () => {

        const handleOnClick = jest.fn();

        render(<Botao 
            onClick={handleOnClick}
            label = "test_label"
            icon="a"
            />)

        screen.getByText('a')
    })
})