export class User {
    id: string;
    username: string;
    password: string;
    status: number;
    role: number;
    firstname: string;
    lastname: string;
    position: string;
    email: string;

    constructor(id: string, username: string, password: string,
        status: number,
        role: number,
        firstname: string,
        lastname: string,
        position: string,
        email: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.status = status;
        this.role = role;
        this.firstname = firstname;
        this.lastname = lastname;
        this.position = position;
        this.email = email;
    }

    toJSON(): JSON {
        return JSON.parse(
            '{"username": "' + this.username +
            '" , "password": "' + this.password +
            '" , "status": "' + this.status +
            '" , "role": "' + this.role +
            '" , "firstname": "' + this.firstname +
            '" , "lastname": "' + this.lastname +
            '" , "position": "' + this.position +
            '" , "email": "' + this.email +
            '" }'
        );
    }
}
