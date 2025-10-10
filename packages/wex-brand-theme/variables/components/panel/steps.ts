import type { StepsDesignTokens } from '@primeuix/themes/types/steps';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    itemLabel: {
        activeColor: "{primary.color}",
        color: "{text.muted.color}",
        fontWeight: "500"
    },
    itemLink: {
        borderRadius: "{content.border.radius}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gap: "0.5rem"
    },
    itemNumber: {
        activeBackground: "{content.background}",
        activeBorderColor: "{content.border.color}",
        activeColor: "{primary.color}",
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "50%",
        color: "{text.muted.color}",
        fontSize: "1.143rem",
        fontWeight: "500",
        shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)",
        size: "2rem"
    },
    separator: {
        background: "{content.border.color}"
    }
} satisfies StepsDesignTokens;