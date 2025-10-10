import type { DockDesignTokens } from '@primeuix/themes/types/dock';

 export default {
    root: {
        background: "#ffffff1a",
        borderColor: "#ffffff33",
        borderRadius: "{border.radius.xl}",
        padding: "0.5rem"
    },
    item: {
        borderRadius: "{content.border.radius}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        padding: "0.5rem",
        size: "3rem"
    }
} satisfies DockDesignTokens;