import type { TooltipDesignTokens } from '@primeuix/themes/types/tooltip';

export default {
    root: {
        borderRadius: "{overlay.popover.border.radius}",
        gutter: "0.25rem",
        maxWidth: "12.5rem",
        padding: "0.5rem 0.75rem",
        shadow: "{overlay.popover.shadow}"
    },
    colorScheme: {
        dark: {
            root: {
                background: "{surface.700}",
                color: "{surface.0}"
            }
        },
        light: {
            root: {
                background: "{surface.700}",
                color: "{surface.0}"
            }
        }
    }
} satisfies TooltipDesignTokens;