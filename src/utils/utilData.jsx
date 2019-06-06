/*
 * @Author: wdy
 * @Date: 2019-04-23 20:54:17
 * @Last Modified by:   wdy
 * @Last Modified time: 2019-04-23 20:54:17
 */
export function isNull(arg) {
  return !!(!arg && arg !== 0 && typeof arg !== 'boolean');
}
