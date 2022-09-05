const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map((elem) => elem.split(".").reverse());
  for (let i = 0; i < arr.length; i++) {
    arr[i].map(
      (el, index, a) =>
        (a[index] = a[index - 1]
          ? `${a[index - 1]}.` + a[index]
          : `.${a[index]}`)
    );
  }
  let arr2 = [];
  arr2 = arr.flat(); // новый массив из всех подмасивов
  let arr3 = [...new Set(arr2)]; //удаляем дубликаты

  let count = {};
  for (let elem of arr2) {
    if (count[elem] === undefined) {
      count[elem] = 1;
    } else {
      count[elem]++;
    }
  }

  return count;
}

module.exports = {
  getDNSStats,
};
