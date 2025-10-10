import type { SelectDesignTokens } from '@primeuix/themes/types/select';

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
        filledHoverBackground: "{form.field.filled.hover.background}",
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
        invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
        lg: {
            fontSize: "{form.field.lg.font.size}",
            paddingX: "{form.field.lg.padding.x}",
            paddingY: "{form.field.lg.padding.y}"
        },
        paddingX: "{form.field.padding.x}",
        paddingY: "{form.field.padding.y}",
        placeholderColor: "{form.field.placeholder.color}",
        shadow: "{form.field.shadow}",
        sm: {
            fontSize: "{form.field.sm.font.size}",
            paddingX: "{form.field.sm.padding.x}",
            paddingY: "{form.field.sm.padding.y}"
        },
        transitionDuration: "{form.field.transition.duration}"
    },
    checkmark: {
        color: "{list.option.color}",
        gutterEnd: "0.375rem",
        gutterStart: "-0.375rem"
    },
    clearIcon: {
        color: "{form.field.icon.color}"
    },
    dropdown: {
        color: "{form.field.icon.color}",
        width: "2.5rem"
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
    },
    overlay: {
        background: "{overlay.select.background}",
        borderColor: "{overlay.select.border.color}",
        borderRadius: "{overlay.select.border.radius}",
        color: "{overlay.select.color}",
        shadow: "{overlay.select.shadow}"
    }
} satisfies SelectDesignTokens;