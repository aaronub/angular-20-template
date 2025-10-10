import type { SkeletonDesignTokens } from '@primeuix/themes/types/skeleton';

export default {
    root: {
        borderRadius: "{content.border.radius}"
    },
    colorScheme: {
        dark: {
            root: {
                animationBackground: "rgba(255, 255, 255, 0.04)",
                background: "rgba(255, 255, 255, 0.06)"
            }
        },
        light: {
            root: {
                animationBackground: "rgba(255,255,255,0.4)",
                background: "{surface.200}"
            }
        }
    }
} satisfies SkeletonDesignTokens;