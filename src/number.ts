/**
 * replace all non-numeric character in string with separator character
 * @param v string contains number
 * @param separator separator character
 * @returns unified numeric string
 */
export function unifySeparator(v: string, separator: string) {
    return v.replace(/[^0-9.-]+/g, separator);
}

/**
 * format number with separator
 *
 * @param v string contains numeric value
 * @param separator separator character
 * @returns formatted string
 */
export function formatNumber(v: any, separator = ","): string {
    const n = parseNumber(`${v}`);
    if (isNaN(n)) {
        return "";
    }
    return unifySeparator(n.toLocaleString("en"), separator);
}

/**
 * extract numeric character from string
 *
 * @param v string
 * @returns string
 */
export function extractNumeric(v: string): string {
    return (v.match(/[-\d.]+/g) || [])
        .join("")
        .split(".")
        .slice(0, 2)
        .join(".")
        .split("")
        .map((c, index) => (c === "-" ? (index === 0 ? c : "") : c))
        .join("")
        .replace(/^0+/, "0")
        .replace(/^-[0]+/, "-0")
        .replace(/^\./, "0.")
        .replace(/^-\./, "-0.");
}

/**
 * parse number from string
 *
 * @param v number
 * @returns number or NaN
 */
export function parseNumber(v: string): number {
    const n = extractNumeric(v);
    return n.length === 0 || isNaN(+n) ? NaN : +n;
}
