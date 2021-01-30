import React, {FC} from 'react'
import { VisorContainer } from './StyledComponents';
import {IProps} from './types/index'

const Visor: FC<IProps> = ({expressao, resultado}) => {

    return(<>
    <VisorContainer>
            <div>{expressao}</div>
            <div>{resultado}</div>
    </VisorContainer>
    </>)

}

export default Visor;