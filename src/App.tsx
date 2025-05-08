import { Heading } from './components/Heading'
import './styles/global.css'
import './styles/theme.css'

function App () {


    return (
        <>
            <Heading attr={123} attr2='String'>Olá mundo</Heading>
            <Heading>Tudo certo</Heading>
            <Heading>Com voçê</Heading>
            <Heading>Em</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur voluptates sit, exercitationem eos, ex libero porro culpa facere, sint facilis ducimus quis fugit sequi reiciendis earum? Vitae, iure itaque?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eos harum aut distinctio nesciunt quisquam facilis sint ex, esse, molestias quidem excepturi consequatur est nemo facere voluptatem necessitatibus velit a?</p>
        </>
    )
}

export {App}