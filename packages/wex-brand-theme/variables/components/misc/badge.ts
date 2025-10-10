import type { BadgeDesignTokens } from '@primeuix/themes/types/badge';

 export default {
    root: {
        borderRadius: "{border.radius.md}",
        fontSize: "0.75rem",
        fontWeight: "700",
        height: "1.5rem",
        minWidth: "1.5rem",
        padding: "0 0.5rem"
    },
    colorScheme: {
        dark: {
            contrast: {
                background: "{surface.0}",
                color: "{surface.950}"
            },
            danger: {
                background: "{red.500}",
                color: "{surface.0}"
            },
            info: {
                background: "{blue.400}",
                color: "{surface.0}"
            },
            primary: {
                background: "{primary.color}",
                color: "{primary.contrast.color}"
            },
            secondary: {
                background: "{surface.600}",
                color: "{surface.0}"
            },
            success: {
                background: "{teal.600}",
                color: "{surface.0}"
            },
            warn: {
                background: "{message.warn.color}",
                color: "{orange.950}"
            }
        },
        light: {
            contrast: {
                background: "{surface.950}",
                color: "{surface.0}"
            },
            danger: {
                background: "{red.500}",
                color: "{surface.0}"
            },
            info: {
                background: "{blue.500}",
                color: "{surface.0}"
            },
            primary: {
                background: "{primary.color}",
                color: "{primary.contrast.color}"
            },
            secondary: {
                background: "{surface.300}",
                color: "{surface.600}"
            },
            success: {
                background: "{teal.600}",
                color: "{surface.0}"
            },
            warn: {
                background: "{button.outlined.warn.color}",
                color: "{surface.0}"
            }
        }
    },
    dot: {
        size: "0.5rem"
    },
    lg: {
        fontSize: "0.875rem",
        height: "1.75rem",
        minWidth: "1.75rem"
    },
    sm: {
        fontSize: "0.625rem",
        height: "1.25rem",
        minWidth: "1.25rem"
    },
    xl: {
        fontSize: "1rem",
        height: "2rem",
        minWidth: "2rem"
    }
} satisfies BadgeDesignTokens;