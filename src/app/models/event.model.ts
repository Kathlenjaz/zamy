import { Time } from '@angular/common';

export class Event {
    id: string;
    name: string;
    location: string;
    date: Date;
    price: number;
    lastRegisterDate: Date;
    urlImage: string;

    constructor(name: string,
        location: string,
        date: Date,
        price: number,
        lastRegisterDate: Date,
        urlImage: string) {
            this.name = name;
            this.location = location;
            this.date = date;
            this.price = price;
            this.lastRegisterDate = lastRegisterDate;
            this.urlImage = urlImage;
    }

    toJSON(): JSON {
        return JSON.parse(
            '{"name": "' + this.name +
            '" , "location": "' + this.location +
            '" , "date": "' + this.date +
            '" , "price": "' + this.price +
            '" , "lastRegisterDate": "' + this.lastRegisterDate +
            '" , "urlImage": "' + this.urlImage +
            '" }'
        );
    }
}
