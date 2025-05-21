import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { DefaultInput } from './components/Input'

import './styles/global.css'
import './styles/theme.css'

export function App () {

    return (
        <>
        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>
        <Container>
            <CountDown />
        </Container>
        <Container>
            <form className='form' action=''>
                <div className="formRow">
                    <DefaultInput id='meuInput' type='text' />
                </div>

                <div className="forRow">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="forRow">
                    <p>Ciclos</p>
                    <p>0 0 0 0 0 0 0</p>
                </div>

                <div className="forRow">
                    <button>Enviar</button>
                </div>
            </form>
        </Container>
        </>
    )
}
