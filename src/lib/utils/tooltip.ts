import tippy, { type Props } from "tippy.js";
import "tippy.js/animations/perspective-subtle.css";

export default function tooltip(n: Element, opts: Partial<Props>) {
    opts.animation =
        opts.animation === undefined ? "perspective-subtle" : opts.animation;
    opts.duration = opts.duration === undefined ? 100 : opts.duration;
    const tooltip = tippy(n, opts);

    return {
        destroy() {
            tooltip.destroy();
        },
    };
}
