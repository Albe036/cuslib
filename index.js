import { faker } from "@faker-js/faker";
import colors from "colors";

colors.enabled = true;

export function send_random_number() {
    const data = {
        number: faker.string.uuid(),
        name: faker.internet.userName(),
    }
    console.log(`${data.number} - ${data.name}`.red.bold);
    return data;
}

send_random_number()