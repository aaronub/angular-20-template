import type { AutoCompleteDesignTokens } from '@primeuix/themes/types/autocomplete';

 export default {
    root: {
        background: "{form.field.background}",
        borderRadius: "{form.field.border.radius}",
        borderColor: "{form.field.border.color}",
        color: "{form.field.color}",
        disabledBackground: "{form.field.disabled.background}",
        disabledColor: "{form.field.disabled.color}",
        filledBackground: "{form.field.filled.background}",
        filledFocusBackground: "{form.field.filled.focus.background}",
        filledHoverBackground: "{form.field.filled.hover.background}",
        focusBorderColor: "{form.field.focus.border.color}",
        focusRing: {
            color: "{form.field.focus.ring.color}",
            offset: "{form.field.focus.ring.offset}",
            shadow: "0px 0px 0px 0px #00000000",
            style: "{form.field.focus.ring.style}",
            width: "{form.field.focus.ring.width}"
        },
        hoverBorderColor: "{form.field.hover.border.color}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
        paddingX: "{form.field.padding.x}",
        paddingY: "{form.field.padding.y}",
        placeholderColor: "{form.field.placeholder.color}",
        shadow: "0px 1px 2px 0px #1212170d",
        transitionDuration: "{form.field.transition.duration}"
    },
    chip: {
        borderRadius: "{border.radius.sm}"
    },
    colorScheme: {
        dark: {
            chip: {
                focusBackground: "{surface.700}",
                focusColor: "{surface.0}"
            },
            dropdown: {
                activeBackground: "{surface.600}",
                activeColor: "{surface.100}",
                background: "{surface.800}",
                color: "{surface.300}",
                hoverBackground: "{surface.700}",
                hoverColor: "{surface.200}"
            }
        },
        light: {
            chip: {
                focusBackground: "{surface.200}",
                focusColor: "{surface.800}"
            },
            dropdown: {
                activeBackground: "{surface.300}",
                activeColor: "{surface.800}",
                background: "{surface.100}",
                color: "{surface.600}",
                hoverBackground: "{surface.200}",
                hoverColor: "{surface.700}"
            }
        }
    },
    dropdown: {
        activeBorderColor: "{form.field.border.color}",
        borderRadius: "{form.field.border.radius}",
        borderColor: "{form.field.border.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "0px 0px 0px 0px #00000000",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        hoverBorderColor: "{form.field.border.color}",
        lg: {
            width: "3rem"
        },
        sm: {
            width: "2rem"
        },
        width: "2.5rem"
    },
    emptyMessage: {
        padding: "{list.option.padding}"
    },
    list: {
        gap: "{list.gap}",
        padding: "{list.padding}"
    },
    option: {
        borderRadius: "{list.option.border.radius}",
        color: "{list.option.color}",
        focusBackground: "{list.option.focus.background}",
        focusColor: "{list.option.focus.color}",
        padding: "{list.option.padding}",
        selectedBackground: "{list.option.selected.background}",
        selectedColor: "{list.option.selected.color}",
        selectedFocusBackground: "{list.option.selected.focus.background}",
        selectedFocusColor: "{list.option.selected.focus.color}"
    },
    optionGroup: {
        background: "{list.option.group.background}",
        color: "{list.option.group.color}",
        fontWeight: "{list.option.group.font.weight}",
        padding: "{list.option.group.padding}"
    },
    overlay: {
        background: "{overlay.select.background}",
        borderColor: "{overlay.select.border.color}",
        borderRadius: "{overlay.select.border.radius}",
        color: "{overlay.select.color}",
        shadow: "0px 2px 4px -2px #0000001a, 0px 4px 6px -1px #0000001a"
    }
} satisfies AutoCompleteDesignTokens;