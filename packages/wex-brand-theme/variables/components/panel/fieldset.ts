import type { FieldsetDesignTokens } from '@primeuix/themes/types/fieldset';

 export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        padding: "0 1.125rem 1.125rem 1.125rem",
        transitionDuration: "{transition.duration}"
    },
    content: {
        padding: "0"
    },
    legend: {
        background: "{content.background}",
        borderColor: "#00000000",
        borderRadius: "{content.border.radius}",
        borderWidth: "1px",
        color: "{content.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        fontWeight: "600",
        gap: "0.5rem",
        hoverBackground: "{content.hover.background}",
        hoverColor: "{content.hover.color}",
        padding: "0.5rem 0.75rem"
    },
    toggleIcon: {
        color: "{text.muted.color}",
        hoverColor: "{text.hover.muted.color}"
    }
} satisfies FieldsetDesignTokens;