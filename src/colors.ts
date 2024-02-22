interface Color {
    base: string;
    light: string;
    r: number;
    g: number;
    b: number;
}

/**
 * color space manager
 */
export class ColorSpace<T> {
    private colors: Map<T, Color>;

    public constructor() {
        this.colors = new Map<T, Color>();
    }

    /**
     * register new color in color space
     *
     * @param key color key
     * @param base color in hex
     * @param light light version of color in hex
     * @param r color red amount in rgb mode
     * @param g color green amount in rgb mode
     * @param b color blue amount in rgb mode
     */
    public AddColor(
        key: T,
        base: string,
        light: string,
        r: number,
        g: number,
        b: number
    ) {
        this.colors.set(key, { base, light, r, g, b });
    }

    /**
     * get registered color
     *
     * @param key color key
     */
    public color(key: T): string | undefined {
        const c = this.colors.get(key);
        return c ? c.base : undefined;
    }

    /**
     * get array of registered colors
     * @returns array of colors
     */
    public all(): string[] {
        const res: string[] = [];
        this.colors.forEach((i) => {
            res.push(i.base);
        });
        return res;
    }

    /**
     * generate alpha color string
     *
     * @param key color key
     * @param a alpha between 0 to 1
     */
    public alpha(key: T, a: number): string | undefined {
        const c = this.colors.get(key);
        return c ? `rgba(${c.r}, ${c.g}, ${c.b}, ${a})` : undefined;
    }

    /**
     * generate faded transparent top to bottom gradient from registered color
     *
     * @param key color key
     * @param ctx canvas context
     * @param area shape area
     * @returns faded one color gradient
     */
    public linearAlpha(key: T, ctx: any, area: any): any | undefined {
        const top = this.alpha(key, 0.25);
        const bottom = this.alpha(key, 0);
        if (top && bottom) {
            let height = area.bottom - area.top;
            height = height + height * 0.25;
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, top);
            gradient.addColorStop(1, bottom);
            return gradient;
        }
        return undefined;
    }

    /**
     * generate two color top to bottom linear gradient from registered color
     *
     * @param key color key
     * @param ctx canvas context
     * @param area shape area
     * @returns two color gradient
     */
    public linear(key: T, ctx: any, area: any): any | undefined {
        const c = this.colors.get(key);
        if (c) {
            let height = area.bottom - area.top;
            height = height + height * 0.25;
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, c.light);
            gradient.addColorStop(1, c.base);
            return gradient;
        }
        return undefined;
    }

    /**
     * generate two color radial gradient from registered color
     *
     * @param key color key
     * @param ctx canvas context
     * @param area shape area
     * @returns two color gradient
     */
    public radial(key: T, ctx: any, area: any): any | undefined {
        const c = this.colors.get(key);
        if (c) {
            const x = (area.left + area.right) / 2;
            const y = (area.bottom + area.top) / 2;
            const radius = Math.min(x, y);
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, c.light);
            gradient.addColorStop(1, c.base);
            return gradient;
        }
        return undefined;
    }
}
