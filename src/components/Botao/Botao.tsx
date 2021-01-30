import React, {FC} from 'react';
import { BotaoContainer } from './StyledComponents';
import { IProps } from './types';

const Botao: FC<IProps> = ({onClick, label, icon, background, color}) => {

 return(<>
    <BotaoContainer
        onClick={onClick}
        background={background}
        color={color}

    >
        {icon && <i>{icon}</i>}
        {label}
    </BotaoContainer>
 </>)
}

export default Botao