import { fireEvent, render, screen } from '@testing-library/react'
import Visor from './Visor';

describe('<Visor>', () => {
    it('Deve exibir o visor', () => {
        render(<Visor expressao="test_expressao" resultado="test_resultado"/>);
        screen.getByText("test_expressao")
        screen.getByText("test_resultado")
    })
})