import type { TaskStateModel } from "../../Models/TaskStateModel";
import { TaskActionTypes, type TaskAcionModel } from "./taskActions";
import { getNextCycle } from "../../utils/getNextCycle";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";


export function taskReducer(state: TaskStateModel, action: TaskAcionModel): TaskStateModel {
    switch(action.type){
        case TaskActionTypes.START_TASK: {

            const newTask = action.payload
            const nextCycle = getNextCycle(state.currentCycle)
            const secondsRemainig = newTask.duration * 60

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemainig,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemainig),
                tasks: [...state.tasks, newTask]
            }
        }
        case TaskActionTypes.INTERRUPT_TASK: {
            return  {
                ...state,
                activeTask: null,
                secondsRemainig: 0,
                formattedSecondsRemaining: '00:00',
                tasks: state.tasks.map(task => {
                    if (state.activeTask && state.activeTask.id === task.id){
                        return {...task, interruptDate: Date.now()}
                    }
                    return task
                })
            }
        }
        case TaskActionTypes.RESET_STATE: {
            return state
        }
    }


    return state

}