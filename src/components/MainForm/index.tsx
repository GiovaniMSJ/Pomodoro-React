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
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function MainForm () {
    const [taskName, SetTaskName] = useState('')
    const { state, dispatch } = useTaskContext()

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

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

        dispatch({type: TaskActionTypes.START_TASK, payload: newTask})

    }

    function handleInterruptTask() {
        dispatch({type: TaskActionTypes.INTERRUPT_TASK })
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