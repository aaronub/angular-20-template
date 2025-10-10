import type { OrganizationChartDesignTokens } from '@primeuix/themes/types/organizationchart';

export default {
    root: {
        gutter: "0.75rem",
        transitionDuration: "{transition.duration}"
    },
    connector: {
        borderRadius: "{content.border.radius}",
        color: "{content.border.color}",
        height: "24px"
    },
    node: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        hoverBackground: "{content.hover.background}",
        hoverColor: "{content.hover.color}",
        padding: "0.75rem 1rem",
        selectedBackground: "{highlight.background}",
        selectedColor: "{highlight.color}",
        toggleablePadding: "0.75rem 1rem 1.25rem 1rem"
    },
    nodeToggleButton: {
        background: "{content.background}",
        borderRadius: "50%",
        borderColor: "{content.border.color}",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        hoverBackground: "{content.hover.background}",
        hoverColor: "{text.color}",
        size: "1.5rem"
    }
} satisfies OrganizationChartDesignTokens;