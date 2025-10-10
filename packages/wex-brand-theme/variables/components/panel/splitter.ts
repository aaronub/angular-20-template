import type { SplitterDesignTokens } from '@primeuix/themes/types/splitter';

export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        color: "{content.color}",
        transitionDuration: "{transition.duration}"
    },
    gutter: {
        background: "{content.border.color}"
    },
    handle: {
        background: "transparent",
        borderRadius: "{content.border.radius}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        size: "1.714rem"
    }
} satisfies SplitterDesignTokens;