import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../Button";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../Input";
import type React from "react";
import { useState } from "react";
import type { TaskModel } from "../../Models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleTypes";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

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
    const nextCycleType = getNextCycleType(nextCycle);

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
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemainig), // Provisorio
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    
    function handleInterruptTask() {
        setState(prevState =>{
            return {
                ...prevState,
                activeTask: null,
                secondsRemainig: 0,
                formattedSecondsRemaining: '00:00',
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
            disabled={!!state.activeTask}
            />
        </div>

        <div className="forRow">
            <p>Próximo intervalo é de 25 min</p>
        </div>

        {state.currentCycle > 0 && (
            <div className="formRow">
                <Cycles />
            </div>
        )}

        <div className="forRow">
            {!state.activeTask && (
                <DefaultButton
                    aria-label="Iniciar nova tarefa"
                    title="Iniciar nova tarefa"
                    type="submit"
                    icon={<PlayCircleIcon />}
                />
            )}
            {!!state.activeTask &&(
                <DefaultButton
                    aria-label="Interroper tarefa atual"
                    title="Interroper tarefa atual"
                    type="button"
                    color="red"
                    icon={<StopCircleIcon />}
                    onClick={handleInterruptTask}
                />
            )
        }
        </div>
    </form>
    )
}