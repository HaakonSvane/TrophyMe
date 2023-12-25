type NameArgs = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

class Name {
    firstName: string;
    middleName?: string;
    lastName: string;

    constructor(args: NameArgs) {
        this.firstName = args.firstName;
        this.middleName = args.middleName;
        this.lastName = args.lastName;
    }

    get firstLast() {
        return `${this.firstName} ${this.lastName}`;
    }

    get fullName() {
        return `${this.firstName} ${this.middleName ? `${this.middleName} ` : ""}${this.lastName}`;
    }
}
