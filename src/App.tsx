import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { DefaultInput } from './components/Input'
import { DefaultButton } from './components/Button' 
import { Cycles } from './components/Cycles'
import { Footer } from './components/Footer'

import './styles/global.css'
import './styles/theme.css'
import { PlayCircleIcon } from 'lucide-react'

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
                    <DefaultInput id='meuInput' type='text' lableText='Tasks:' placeholder='Digite algo' />
                </div>

                <div className="forRow">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="formRow">
                    <Cycles />
                </div>

                <div className="forRow">
                    <DefaultButton icon={<PlayCircleIcon />}/>
                </div>
            </form>
        </Container>
        <Container>
            <Footer />
        </Container>
        </>
    )
}
