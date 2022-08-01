import { FC } from 'react'
import './Shadow.css'

type ShadowProps = {
    children?: React.ReactNode
}

const Shadow: FC<ShadowProps> = props => {
    return (
        <span className='shadowed' >
            {props.children}
        </span>
    )
}

export default Shadow
