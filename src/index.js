function toReadable(num) {
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
    let numString = num.toString();
    let numLength = numString.length;
    if (numLength > 9) {
        str = "Number is too large to convert";
        return str;
    }
    if (num === 0) {
        str = lookup[0];
        return str;
    }
    if (num < 0) {
        str = "minus ";
        num = -num;
    }
    if (num < 21) {
        str += lookup[num];
    } else if (num < 100) {
        let tens = Math.floor(num / 10);
        str += lookup[tens * 10];
        if (num % 10 !== 0) {
            str += " " + lookup[num % 10];
        }
    } else if (num < 1000) {
        let hundreds = Math.floor(num / 100);
        str += lookup[hundreds] + " hundred";
        if (num % 100 !== 0) {
            str += " " + toReadable(num % 100);
        }
    } else if (num < 1000000) {
        let thousands = Math.floor(num / 1000);
        str += toReadable(thousands) + " thousand";
        if (num % 1000 !== 0) {
            str += " " + toReadable(num % 1000);
        }
    } else if (num < 1000000000) {
        let millions = Math.floor(num / 1000000);
        str += toReadable(millions) + " million";
        if (num % 1000000 !== 0) {
            str += " " + toReadable(num % 1000000);
        }
    }
    return str;
}
