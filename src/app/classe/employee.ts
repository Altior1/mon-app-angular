import { Workable } from "../interface/workable";

export class Employee implements Workable {
    protected name: string;

    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    public work(): string {
        return `${this.name} is working.`;
    }
    getSalary(): number {
        return this.salary;
    }
}
