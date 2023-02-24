export interface IProject {
    _id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    teamLeaderID: string,
    remainTime?: number;
    status: string;
    tasks: string[];
    overdue?: boolean;
}