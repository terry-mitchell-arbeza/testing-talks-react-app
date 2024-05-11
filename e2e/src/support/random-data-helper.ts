export const randomInputTypes = [
    'email',
    'password'
] as const;
export type RandomInputType = typeof randomInputTypes[number];

import { faker } from '@faker-js/faker';

export const randomEmail = ():string => {
    return faker.internet.email()
}

export const randomPassword = ():string => {
    return faker.internet.password();
}

export const getRandomData = (randomInputType: RandomInputType): string => {
    switch (randomInputType){
        case 'email':
            return randomEmail();
        case 'password':
            return randomPassword();
        default:
            return '';
    }
}