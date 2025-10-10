import type { BreadcrumbDesignTokens } from '@primeuix/themes/types/breadcrumb';

 export default {
    root: {
        background: "{content.background}",
        gap: "0.5rem",
        padding: "1rem",
        transitionDuration: "{transition.duration}"
    },
    item: {
        borderRadius: "{content.border.radius}",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gap: "{navigation.item.gap}",
        hoverColor: "{text.color}",
        icon: {
            color: "{navigation.item.icon.color}",
            hoverColor: "{navigation.item.icon.focus.color}"
        }
    },
    separator: {
        color: "{navigation.item.icon.color}"
    }
} satisfies BreadcrumbDesignTokens;