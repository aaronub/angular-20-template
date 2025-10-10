import type { ChipDesignTokens } from '@primeuix/themes/types/chip';

 export default {
    root: {
        borderRadius: "1.143rem",
        gap: "0.5rem",
        paddingX: "0.75rem",
        paddingY: "0.5rem",
        transitionDuration: "{transition.duration}"
    },
    colorScheme: {
        dark: {
            icon: {
                color: "{surface.0}"
            },
            removeIcon: {
                color: "{surface.0}"
            },
            root: {
                background: "{surface.800}",
                color: "{surface.0}"
            }
        },
        light: {
            icon: {
                color: "{surface.800}"
            },
            removeIcon: {
                color: "{surface.800}"
            },
            root: {
                background: "{surface.100}",
                color: "{surface.800}"
            }
        }
    },
    icon: {
        size: "1rem"
    },
    image: {
        height: "2rem",
        width: "2rem"
    },
    removeIcon: {
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{form.field.focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        size: "1rem"
    }
} satisfies ChipDesignTokens;