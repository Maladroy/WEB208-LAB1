import { ITask } from "./task.model";
export interface IProject {
    _id: string;
    name: string;
    description: string;
    startDate: string | Date;
    endDate: string | Date;
    remainTime?: number;
    status: string;
    tasks: string[];
    overdue?: boolean;
}