/**
 * get array from value
 *
 * @param v value
 * @returns value or empty array
 */
export function arrayOf<T = any>(v: unknown): T[] {
    return Array.isArray(v) ? v : [];
}
