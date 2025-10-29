import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../Button";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../Input";
import type React from "react";
import { useState } from "react";

type AvailableColor = 'green' | 'red'

export function MainForm () {
    const [taskName, SetTaskName] = useState('')
    const [button, setButton] = useState<AvailableColor>('green')

    const buttonIcon = {
        green: <PlayCircleIcon />,
        red: <StopCircleIcon />,
    }

    function handleCreateNewTask(event: React.MouseEvent<HTMLAnchorElement>){
        event.preventDefault()
        setButton(prevEvent => {
            const nexColorButton = prevEvent === 'green' ? 'red' : 'green'
            return nexColorButton
        })
    }

    
    return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
        <div className="formRow">
            <DefaultInput 
            id='meuInput' 
            type='text' 
            lableText='tasks:' 
            placeholder='Digite algo' 
            value={taskName} 
            onChange={(e) => SetTaskName(e.target.value)} 
            />
        </div>

        <div className="forRow">
            <p>Próximo intervalo é de 25 min</p>
        </div>

        <div className="formRow">
            <Cycles />
        </div>

        <div className="forRow">
            <DefaultButton color={button} icon={buttonIcon[button]}/>
        </div>
    </form>
    )
}