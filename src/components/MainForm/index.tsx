import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../Button";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../Input";


export function MainForm () {
    return (
    <form className='form' action=''>
        <div className="formRow">
            <DefaultInput id='meuInput' type='text' lableText='tasks:' placeholder='Digite algo' />
        </div>

        <div className="forRow">
            <p>Próximo intervalo é de 25 min</p>
        </div>

        <div className="formRow">
            <Cycles />
        </div>

        <div className="forRow">
            <DefaultButton icon={<PlayCircleIcon />}/>
        </div>
    </form>
    )
}