module.exports = function toReadable (number) {
    const numbers = {
      0: `zero`, 1: `one`, 2: `two`, 3: `three`, 4: `four`,
      5: `five`, 6: `six`, 7: `seven`, 8: `eight`, 9: `nine`,
      10: `ten`, 11: `eleven`, 12: `twelve`, 13: `thirteen`, 14: `fourteen`,
      15: `fifteen`, 16: `sixteen`, 17: `seventeen`, 18: `eighteen`, 19: `nineteen`,
      20: `twenty`, 30: `thirty`, 40: `forty`, 50: `fifty`, 60: `sixty`,
      70: `seventy`, 80: `eighty`, 90: `ninety`,
    }
    number = number.toString().split(``);
    let result = ``;
    if (number.length === 1) {
      return result = numbers[number[0]];
    }
    else if (number.length === 2) {
      if (+number.join(``) < 20) {
        return result = numbers[number.join(``)];
      }
      else if (+number.join(``) >= 20 && number[1] === `0`){
        return result = numbers[number[0] + `0`];
      }
      else {
        return result = `${numbers[number[0]+ `0`]} ${numbers[number[1]]}`;
      }
    }
    else if (number.length === 3) {
      if (number[1] === `0` && number[2] === `0`) {
        return result = `${numbers[number[0]]} hundred`;
      }
      else if (number[1] !== `0` && number[2] === `0`) {
        return result = `${numbers[number[0]]} hundred ${numbers[number[1] + `0`]}`;
      }
      else if (number[1] === `0` && number[2] !== `0`) {
        return result = `${numbers[number[0]]} hundred ${numbers[number[2]]}`;
      } else if (+(number[1] + number[2]) < 20) {
        return result = `${numbers[number[0]]} hundred ${numbers[number[1] + number[2]]}`;
      } else {
        return result = `${numbers[number[0]]} hundred ${numbers[number[1] + `0`]} ${numbers[number[2]]}`;
      }
    }
  }
