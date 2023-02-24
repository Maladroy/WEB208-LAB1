export interface ITask extends Document {
    _id: string;
    name: string;
    description: string;
    status: 'notStarted' | 'inProgress' | 'completed';
    projectId: string;
    assignedTo: string[],
    members?: string[],
    dueDate?: Date;
}