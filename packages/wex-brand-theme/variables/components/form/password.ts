import type { PasswordDesignTokens } from '@primeuix/themes/types/password';

export default {
    colorScheme: {
        dark: {
            strength: {
                mediumBackground: "{amber.400}",
                strongBackground: "{teal.400}",
                weakBackground: "{red.400}"
            }
        },
        light: {
            strength: {
                mediumBackground: "{amber.500}",
                strongBackground: "{teal.500}",
                weakBackground: "{red.500}"
            }
        }
    },
    content: {
        gap: "0.5rem"
    },
    icon: {
        color: "{form.field.icon.color}"
    },
    meter: {
        background: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        height: "0.75rem"
    },
    overlay: {
        background: "{overlay.popover.background}",
        borderColor: "{overlay.popover.border.color}",
        borderRadius: "{overlay.popover.border.radius}",
        color: "{overlay.popover.color}",
        padding: "{overlay.popover.padding}",
        shadow: "{overlay.popover.shadow}"
    }
} satisfies PasswordDesignTokens;