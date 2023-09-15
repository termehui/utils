/**
 * clone deep object and arrays
 *
 * @param v value to clone
 * @returns cloned value
 */
export function deepClone<T = any>(v: unknown): T {
    return JSON.parse(JSON.stringify(v));
}
