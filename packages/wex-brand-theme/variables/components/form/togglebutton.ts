import type { ToggleButtonDesignTokens } from '@primeuix/themes/types/togglebutton';

export default {
    root: {
        borderRadius: "{content.border.radius}",
        disabledBackground: "{form.field.disabled.background}",
        disabledBorderColor: "{form.field.disabled.background}",
        disabledColor: "{form.field.disabled.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        fontWeight: "500",
        gap: "0.5rem",
        invalidBorderColor: "{form.field.invalid.border.color}",
        lg: {
            fontSize: "{form.field.lg.font.size}",
            padding: "0.25rem"
        },
        padding: "0.25rem",
        sm: {
            fontSize: "{form.field.sm.font.size}",
            padding: "0.25rem"
        },
        transitionDuration: "{form.field.transition.duration}"
    },
    colorScheme: {
        dark: {
            content: {
                checkedBackground: "{surface.800}"
            },
            icon: {
                checkedColor: "{surface.0}",
                color: "{surface.400}",
                hoverColor: "{surface.300}"
            },
            root: {
                background: "{surface.950}",
                borderColor: "{surface.950}",
                checkedBackground: "{surface.950}",
                checkedBorderColor: "{surface.950}",
                checkedColor: "{surface.0}",
                color: "{surface.400}",
                hoverBackground: "{surface.950}",
                hoverColor: "{surface.300}"
            }
        },
        light: {
            content: {
                checkedBackground: "{surface.0}"
            },
            icon: {
                checkedColor: "{surface.900}",
                color: "{surface.500}",
                hoverColor: "{surface.700}"
            },
            root: {
                background: "{surface.100}",
                borderColor: "{surface.100}",
                checkedBackground: "{surface.100}",
                checkedBorderColor: "{surface.100}",
                checkedColor: "{surface.900}",
                color: "{surface.500}",
                hoverBackground: "{surface.100}",
                hoverColor: "{surface.700}"
            }
        }
    },
    content: {
        borderRadius: "{content.border.radius}",
        checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
        lg: {
            padding: "0.25rem 0.75rem"
        },
        padding: "0.25rem 0.75rem",
        sm: {
            padding: "0.25rem 0.75rem"
        }
    },
    icon: {
        disabledColor: "{form.field.disabled.color}"
    }
} satisfies ToggleButtonDesignTokens;