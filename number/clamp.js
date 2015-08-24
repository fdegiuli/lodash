/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Returns a number whose value is limited to the given range specified
 * by `min` and `max`.
 *
 * @static
 * @memberOf _
 * @category Number
 * @param {number} number The number whose value is to be limited.
 * @param {number} [min] The minimum possible value.
 * @param {number} max The maximum possible value.
 * @returns {number} A number in the range [min, max].
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, min, max) {
  if (max === undefined) {
    max = min;
    min = undefined;
  }
  if (max !== undefined) {
    max = +max;
    number = nativeMin(number, max === max ? max : 0);
  }
  if (min !== undefined) {
    min = +min;
    number = nativeMax(number, min === min ? min : 0);
  }
  return number;
}

module.exports = clamp;
