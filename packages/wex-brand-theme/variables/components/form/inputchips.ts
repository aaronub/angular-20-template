import type { InputChipsDesignTokens } from '@primeuix/themes/types/inputchips';

export default {
    root: {
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        borderRadius: "{form.field.border.radius}",
        color: "{form.field.color}",
        disabledBackground: "{form.field.disabled.background}",
        disabledColor: "{form.field.disabled.color}",
        filledBackground: "{form.field.filled.background}",
        filledFocusBackground: "{form.field.filled.focus.background}",
        focusBorderColor: "{form.field.focus.border.color}",
        focusRing: {
            color: "{form.field.focus.ring.color}",
            offset: "{form.field.focus.ring.offset}",
            shadow: "{form.field.focus.ring.shadow}",
            style: "{form.field.focus.ring.style}",
            width: "{form.field.focus.ring.width}"
        },
        hoverBorderColor: "{form.field.hover.border.color}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        paddingX: "{form.field.padding.x}",
        paddingY: "{form.field.padding.y}",
        placeholderColor: "{form.field.placeholder.color}",
        shadow: "{form.field.shadow}",
        transitionDuration: "{form.field.transition.duration}"
    },
    chip: {
        borderRadius: "{border.radius.sm}"
    },
    colorScheme: {
        dark: {
            chip: {
                color: "{surface.0}",
                focusBackground: "{surface.700}"
            }
        },
        light: {
            chip: {
                color: "{surface.800}",
                focusBackground: "{surface.200}"
            }
        }
    }
} satisfies InputChipsDesignTokens;