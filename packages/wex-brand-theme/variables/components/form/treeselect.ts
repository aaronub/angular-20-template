import type { TreeSelectDesignTokens } from '@primeuix/themes/types/treeselect';

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
    chip: {
        borderRadius: "{border.radius.sm}"
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
    overlay: {
        background: "{overlay.select.background}",
        borderColor: "{overlay.select.border.color}",
        borderRadius: "{overlay.select.border.radius}",
        color: "{overlay.select.color}",
        shadow: "{overlay.select.shadow}"
    },
    tree: {
        padding: "{list.padding}"
    }
} satisfies TreeSelectDesignTokens;