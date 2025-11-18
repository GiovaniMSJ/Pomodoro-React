import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../Button";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../Input";
import type React from "react";
import { useState } from "react";
import type { TaskModel } from "../../Models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNExtCycleType } from "../../utils/getNextCycleTypes";

type AvailableColor = 'green' | 'red'

export function MainForm () {
    const [taskName, SetTaskName] = useState('')
    const { state, setState } = useTaskContext()
    const [button, setButton] = useState<AvailableColor>('green')

    const buttonIcon = {
        green: <PlayCircleIcon />,
        red: <StopCircleIcon />,
    }

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNExtCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        setButton(prevEvent => {
            const nexColorButton = prevEvent === 'green' ? 'red' : 'green'
            return nexColorButton
        })

        const taskNameValue = taskName.trim()

        if (!taskNameValue){
            alert('O valor não pode ser vazio')
            return 
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskNameValue,
            StartDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        const secondsRemainig = newTask.duration * 60

        setState(prevState =>{
            return {
                ...prevState,
                config: {...prevState.config},
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemainig, // Provisorio
                formattedSecondsRemaining: '00:00', // Provisorio
                tasks: [...prevState.tasks, newTask]
            }
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