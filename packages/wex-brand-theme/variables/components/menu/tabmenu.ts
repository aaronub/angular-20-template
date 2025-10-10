import type { TabmenuDesignTokens } from '@primeuix/themes/types/tabmenu';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    activeBar: {
        background: "{primary.color}",
        bottom: "-1px",
        height: "1px"
    },
    item: {
        activeBackground: "transparent",
        activeBorderColor: "{primary.color}",
        activeColor: "{primary.color}",
        background: "transparent",
        borderColor: "{content.border.color}",
        borderWidth: "0 0 1px 0",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        fontWeight: "600",
        gap: "0.5rem",
        hoverBackground: "transparent",
        hoverBorderColor: "{content.border.color}",
        hoverColor: "{text.color}",
        margin: "0 0 -1px 0",
        padding: "1rem 1.125rem"
    },
    itemIcon: {
        activeColor: "{primary.color}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}"
    },
    tablist: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderWidth: "0 0 1px 0"
    }
} satisfies TabmenuDesignTokens;