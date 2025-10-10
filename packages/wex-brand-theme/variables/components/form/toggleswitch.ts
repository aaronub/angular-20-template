import type { ToggleSwitchDesignTokens } from '@primeuix/themes/types/toggleswitch';

export default {
    root: {
        borderColor: "transparent",
        borderRadius: "30px",
        borderWidth: "1px",
        checkedBorderColor: "transparent",
        checkedHoverBorderColor: "transparent",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gap: "0.25rem",
        height: "1.5rem",
        hoverBorderColor: "transparent",
        invalidBorderColor: "{form.field.invalid.border.color}",
        shadow: "{form.field.shadow}",
        slideDuration: "0.2s",
        transitionDuration: "{form.field.transition.duration}",
        width: "2.5rem"
    },
    colorScheme: {
        dark: {
            handle: {
                background: "{surface.400}",
                checkedBackground: "{surface.900}",
                checkedHoverBackground: "{surface.900}",
                checkedColor: "{primary.color}",
                checkedHoverColor: "{primary.hover.color}",
                color: "{surface.900}",
                disabledBackground: "{surface.900}",
                hoverBackground: "{surface.300}",
                hoverColor: "{surface.800}"
            },
            root: {
                background: "{surface.700}",
                checkedBackground: "{primary.color}",
                checkedHoverBackground: "{primary.hover.color}",
                disabledBackground: "{surface.600}",
                hoverBackground: "{surface.600}"
            }
        },
        light: {
            handle: {
                background: "{surface.0}",
                checkedBackground: "{surface.0}",
                checkedHoverBackground: "{surface.0}",
                checkedColor: "{primary.color}",
                checkedHoverColor: "{primary.hover.color}",
                color: "{text.muted.color}",
                disabledBackground: "{form.field.disabled.color}",
                hoverBackground: "{surface.0}",
                hoverColor: "{text.color}"
            },
            root: {
                background: "{surface.300}",
                checkedBackground: "{primary.color}",
                checkedHoverBackground: "{primary.hover.color}",
                disabledBackground: "{form.field.disabled.background}",
                hoverBackground: "{surface.400}"
            }
        }
    },
    handle: {
        borderRadius: "50%",
        size: "1rem"
    }
} satisfies ToggleSwitchDesignTokens;