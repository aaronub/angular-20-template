import type { PaginatorDesignTokens } from '@primeuix/themes/types/paginator';

export default {
    root: {
        background: "{content.background}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        gap: "0.25rem",
        padding: "0.5rem 1rem",
        transitionDuration: "{transition.duration}"
    },
    currentPageReport: {
        color: "{text.muted.color}"
    },
    jumpToPageInput: {
        maxWidth: "2.5rem"
    },
    navButton: {
        background: "transparent",
        borderRadius: "50%",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        height: "2.5rem",
        hoverBackground: "{content.hover.background}",
        hoverColor: "{text.hover.muted.color}",
        selectedBackground: "{highlight.background}",
        selectedColor: "{highlight.color}",
        width: "2.5rem"
    }
} satisfies PaginatorDesignTokens;