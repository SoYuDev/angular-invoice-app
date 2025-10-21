export class Company {
    name!: string;
    taxIdNumber!: number;

    constructor(name: string, taxIdNumber: number) {
        this.name = name;
        this.taxIdNumber = taxIdNumber;
    }
}