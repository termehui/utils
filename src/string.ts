/**
 * return alter for empty value
 *
 * @param v value to check
 * @param alt alter if value is empty
 * @returns value if valid or alter if value is invalid
 */
export function alter(v: any, alt = "-"): string {
    return !v && v != 0 && v != false ? alt : v;
}

/**
 * make slugify string from strings
 *
 * @param strings strings array
 * @param joiner joiner character
 * @returns slugify string
 */
export function slugify(strings: string[], joiner = "-"): string {
    return strings.join(joiner).replace(/( )+/g, joiner);
}

/**
 * search for value in replacement object and return replacement if found, otherwise returns value itself
 * you can use * key in replacement to define default value if no replacement is defined
 *
 * @param v value to map
 * @param replacements string object to search (key) and replace (value)
 */
export function mapper(
    v: string,
    replacements: { [k: string]: string }
): string {
    if (Object.keys(replacements).includes(v)) {
        return replacements[v];
    }
    if (Object.keys(replacements).includes("*")) {
        return replacements["*"];
    }
    return v;
}

/**
 * truncate string and add ... to end of string if string length bigger than truncate length
 *
 * @param v string to truncate
 * @param length truncate length
 */
export function truncate(v: string, length: number): string {
    return v.length < length ? v : v.slice(0, length) + "...";
}

/**
 * convert value to string
 * if falsy value passed this function returns empty string
 *
 * @param v value to convert to string
 * @returns string
 */
export function str(v: any): string {
    return !!v ? `${v}` : "";
}

/**
 * concatenate non-falsy value with space
 *
 * @param items items to concatenate
 * @returns concatenated items
 */
export function joiner(...items: unknown[]): string {
    return items.filter(Boolean).join(" ");
}
