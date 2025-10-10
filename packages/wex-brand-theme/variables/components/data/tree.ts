import type { TreeDesignTokens } from '@primeuix/themes/types/tree';

export default {
    root: {
        background: "{content.background}",
        color: "{content.color}",
        gap: "2px",
        indent: "1rem",
        padding: "1rem",
        transitionDuration: "{transition.duration}"
    },
    filter: {
        margin: "0 0 0.5rem 0"
    },
    loadingIcon: {
        size: "2rem"
    },
    node: {
        borderRadius: "{content.border.radius}",
        color: "{text.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "-1px",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gap: "0.25rem",
        hoverBackground: "{content.hover.background}",
        hoverColor: "{text.hover.color}",
        padding: "0.25rem 0.5rem",
        selectedBackground: "{highlight.background}",
        selectedColor: "{highlight.color}"
    },
    nodeIcon: {
        color: "{text.muted.color}",
        hoverColor: "{text.hover.muted.color}",
        selectedColor: "{highlight.color}"
    },
    nodeToggleButton: {
        borderRadius: "50%",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        hoverBackground: "{content.hover.background}",
        hoverColor: "{text.hover.muted.color}",
        selectedHoverBackground: "{content.background}",
        selectedHoverColor: "{primary.color}",
        size: "1.75rem"
    }
} satisfies TreeDesignTokens;