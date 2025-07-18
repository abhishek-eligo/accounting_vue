/**
 * Converts numbers to Indian English words
 * @param {number} num - The number to convert
 * @returns {string} - The number in words
 */
export function numberToWords(num) {
  if (num === 0) return "zero";

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  function convertLessThanOneThousand(n) {
    if (n === 0) return "";

    if (n < 10) return ones[n];

    if (n < 20) return teens[n - 10];

    if (n < 100) {
      return (
        tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + ones[n % 10] : "")
      );
    }

    if (n < 1000) {
      return (
        ones[Math.floor(n / 100)] +
        " hundred" +
        (n % 100 !== 0 ? " and " + convertLessThanOneThousand(n % 100) : "")
      );
    }
  }

  function convert(n) {
    if (n === 0) return "zero";

    const crore = Math.floor(n / 10000000);
    const lakh = Math.floor((n % 10000000) / 100000);
    const thousand = Math.floor((n % 100000) / 1000);
    const remainder = n % 1000;

    let result = "";

    if (crore > 0) {
      result += convertLessThanOneThousand(crore) + " crore";
    }

    if (lakh > 0) {
      if (result !== "") result += " ";
      result += convertLessThanOneThousand(lakh) + " lakh";
    }

    if (thousand > 0) {
      if (result !== "") result += " ";
      result += convertLessThanOneThousand(thousand) + " thousand";
    }

    if (remainder > 0) {
      if (result !== "") result += " ";
      result += convertLessThanOneThousand(remainder);
    }

    return result;
  }

  // Handle decimal numbers
  const parts = num.toString().split(".");
  const wholePart = parseInt(parts[0]);
  const decimalPart = parts[1] ? parseInt(parts[1]) : 0;

  let result = convert(wholePart);

  if (decimalPart > 0) {
    result += " and " + convert(decimalPart) + " paise";
  }

  return result.charAt(0).toUpperCase() + result.slice(1);
}

/**
 * Formats amount with currency symbol and words
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency symbol (default: '₹')
 * @returns {object} - Object containing formatted amount and words
 */
export function formatAmountWithWords(amount, currency = "₹") {
  const numValue = parseFloat(amount) || 0;
  const words = numberToWords(numValue);

  return {
    amount: numValue,
    formattedAmount: `${currency}${numValue.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`,
    words: `${words} rupees only`,
    wordsOnly: words,
  };
}
