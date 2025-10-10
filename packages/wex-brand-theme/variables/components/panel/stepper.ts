import type { StepperDesignTokens } from '@primeuix/themes/types/stepper';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    separator: {
        activeBackground: "{primary.color}",
        background: "{content.border.color}",
        margin: "0 0 0 1.625rem",
        size: "0.143rem"
    },
    step: {
        gap: "1rem",
        padding: "0.5rem"
    },
    stepHeader: {
        borderRadius: "{content.border.radius}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gap: "0.5rem",
        padding: "0"
    },
    stepNumber: {
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
    stepTitle: {
        activeColor: "{primary.color}",
        color: "{text.muted.color}",
        fontWeight: "500"
    },
    steppanel: {
        background: "{content.background}",
        color: "{content.color}",
        indent: "1rem",
        padding: "0"
    },
    steppanels: {
        padding: "0.875rem 0.5rem 1.125rem 0.5rem"
    }
} satisfies StepperDesignTokens;