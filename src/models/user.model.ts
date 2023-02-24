export interface IUser extends Document {
    username: string;
    password: string;
    role: 'teamLeader' | 'employee';
}