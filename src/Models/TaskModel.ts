import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    StartDate: number;
    completeDate: number | null; // Quando timer chega ao final e quando a pessoa interompe ele vai como nulo
    interruptDate: number | null; // Quando a task for interrompida
    type: keyof TaskStateModel['config']
}