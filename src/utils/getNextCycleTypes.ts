import type { TaskModel } from "../Models/TaskModel";

export function getNExtCycleType(currnetCycle: number) : TaskModel['type'] {
    if(currnetCycle % 8 === 0) return 'longBreakTime';
    if(currnetCycle % 2 === 0) return 'shortBreakTime';
    return 'workTime';
}