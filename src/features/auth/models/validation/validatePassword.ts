import {
    haveDigit,
    haveLengthGreaterThen,
    haveLowerCaseLetter,
    haveUpperCaseLetter,
} from './rules';

export default function validatePassword(password: string): { status: boolean, errors: string[] } {
    const errors = [];

    if (!haveDigit(password)) errors.push('Should have at least one digit');
    if (!haveLengthGreaterThen(password, 12)) errors.push('Should have lagnth greater then 12');
    if (!haveLowerCaseLetter(password)) errors.push('Should have at least one character in lower case');
    if (!haveUpperCaseLetter(password)) errors.push('Should have at leas one character in upper case');

    return {
        status: errors.length === 0,
        errors,
    };
}
