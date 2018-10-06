import { Job } from "./job.model";

export interface User {
    username: string;
    email: string;
    password: string;
    token: string;
    userlocation: string;
    _id: string;
    role: string;
    company: string;
    number: string;
    appliedJobs: Job[];
    postedJobs: Job[];
}