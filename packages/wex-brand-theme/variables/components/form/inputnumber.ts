import type { InputNumberDesignTokens } from '@primeuix/themes/types/inputnumber';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    button: {
        borderRadius: "{form.field.border.radius}",
        verticalPadding: "{form.field.padding.y}",
        width: "2.5rem"
    },
    colorScheme: {
        dark: {
            button: {
                activeBackground: "{surface.700}",
                activeBorderColor: "{form.field.border.color}",
                activeColor: "{surface.200}",
                background: "transparent",
                borderColor: "{form.field.border.color}",
                color: "{surface.400}",
                hoverBackground: "{surface.800}",
                hoverBorderColor: "{form.field.border.color}",
                hoverColor: "{surface.300}"
            }
        },
        light: {
            button: {
                activeBackground: "{surface.200}",
                activeBorderColor: "{form.field.border.color}",
                activeColor: "{surface.600}",
                background: "transparent",
                borderColor: "{form.field.border.color}",
                color: "{surface.400}",
                hoverBackground: "{surface.100}",
                hoverBorderColor: "{form.field.border.color}",
                hoverColor: "{surface.500}"
            }
        }
    }
} satisfies InputNumberDesignTokens;