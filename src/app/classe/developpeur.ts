import { Employee } from "./employee";

export class Developpeur extends Employee {
    private favoriteLanguage: string;

    constructor(name: string, salary: number, favoriteLanguage: string) {
        super(name, salary);
        this.favoriteLanguage = favoriteLanguage;
    }

    public override work(): string {
        return `${this.name} is coding in ${this.favoriteLanguage}.`;
    }


}
