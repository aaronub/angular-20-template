import type { ListboxDesignTokens } from '@primeuix/themes/types/listbox';

export default {
    root: {
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        borderRadius: "{form.field.border.radius}",
        color: "{form.field.color}",
        disabledBackground: "{form.field.disabled.background}",
        disabledColor: "{form.field.disabled.color}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        shadow: "{form.field.shadow}",
        transitionDuration: "{form.field.transition.duration}"
    },
    checkmark: {
        color: "{list.option.color}",
        gutterEnd: "0.375rem",
        gutterStart: "-0.375rem"
    },
    colorScheme: {
        dark: {
            option: {
                stripedBackground: "{surface.900}"
            }
        },
        light: {
            option: {
                stripedBackground: "{surface.50}"
            }
        }
    },
    emptyMessage: {
        padding: "{list.option.padding}"
    },
    list: {
        gap: "{list.gap}",
        header: {
            padding: "{list.header.padding}"
        },
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
    }
} satisfies ListboxDesignTokens;