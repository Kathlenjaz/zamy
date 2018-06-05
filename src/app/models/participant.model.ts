export class Participant {
    id: string;
    inscriptionDate: Date;

    constructor(id: string, inscriptionDate: Date) {
        this.id = id;
        this.inscriptionDate = inscriptionDate;
    }

    toJSON(): JSON {
        return JSON.parse(
            '{"inscriptionDate":"' + this.inscriptionDate +
            '"}'
        );
    }
}
