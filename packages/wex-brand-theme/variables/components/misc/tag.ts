import type { TagDesignTokens } from '@primeuix/themes/types/tag';

export default {
    root: {
        borderRadius: "{content.border.radius}",
        fontSize: "0.875rem",
        fontWeight: "700",
        gap: "0.25rem",
        padding: "0.25rem 0.5rem",
        roundedBorderRadius: "{border.radius.xl}"
    },
    colorScheme: {
        dark: {
            contrast: {
                background: "{surface.0}",
                color: "{surface.950}"
            },
            danger: {
                background: "color-mix(in srgb, {red.500}, transparent 84%)",
                color: "{red.300}"
            },
            info: {
                background: "color-mix(in srgb, {sky.500}, transparent 84%)",
                color: "{sky.300}"
            },
            primary: {
                background: "color-mix(in srgb, {primary.500}, transparent 84%)",
                color: "{primary.300}"
            },
            secondary: {
                background: "{surface.800}",
                color: "{surface.300}"
            },
            success: {
                background: "color-mix(in srgb, {teal.500}, transparent 84%)",
                color: "{teal.300}"
            },
            warn: {
                background: "color-mix(in srgb, {orange.500}, transparent 84%)",
                color: "{orange.300}"
            }
        },
        light: {
            contrast: {
                background: "{surface.950}",
                color: "{surface.0}"
            },
            danger: {
                background: "{red.100}",
                color: "{red.700}"
            },
            info: {
                background: "{sky.100}",
                color: "{sky.700}"
            },
            primary: {
                background: "{primary.100}",
                color: "{primary.700}"
            },
            secondary: {
                background: "{surface.100}",
                color: "{surface.600}"
            },
            success: {
                background: "{teal.100}",
                color: "{teal.700}"
            },
            warn: {
                background: "{orange.100}",
                color: "{orange.700}"
            }
        }
    },
    icon: {
        size: "0.75rem"
    }
} satisfies TagDesignTokens;