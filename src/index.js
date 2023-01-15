module.exports = function toReadable(number) {
    let lookup = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let str = "";
    let numString = number.toString();
    let numLength = numString.length;

    if (number === 0) {
        str = lookup[0];
        return str;
    }
    if (number < 0) {
        str = "minus ";
        number = -number;
    }
    if (number < 21) {
        str += lookup[number];
    } else if (number < 100) {
        let tens = Math.floor(number / 10);
        str += lookup[tens * 10];
        if (number % 10 !== 0) {
            str += " " + lookup[number % 10];
        }
    } else if (number < 1000) {
        let hundreds = Math.floor(number / 100);
        str += lookup[hundreds] + " hundred";
        if (number % 100 !== 0) {
            str += " " + toReadable(number % 100);
        }
    } else if (number < 1000000) {
        let thousands = Math.floor(number / 1000);
        str += toReadable(thousands) + " thousand";
        if (number % 1000 !== 0) {
            str += " " + toReadable(number % 1000);
        }
    } else if (number < 1000000000) {
        let millions = Math.floor(number / 1000000);
        str += toReadable(millions) + " million";
        if (number % 1000000 !== 0) {
            str += " " + toReadable(number % 1000000);
        }
    }
    return str;
};
