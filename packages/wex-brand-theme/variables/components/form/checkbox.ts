import type { CheckboxDesignTokens } from '@primeuix/themes/types/checkbox';

 export default {
    root: {
        background: "{form.field.background}",
        borderRadius: "{border.radius.sm}",
        borderColor: "{form.field.border.color}",
        checkedBackground: "{primary.color}",
        checkedBorderColor: "{primary.color}",
        checkedDisabledBorderColor: "{form.field.border.color}",
        checkedFocusBorderColor: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}",
        checkedHoverBorderColor: "{primary.hover.color}",
        disabledBackground: "{form.field.disabled.background}",
        filledBackground: "{form.field.filled.background}",
        focusBorderColor: "{form.field.border.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        height: "1.25rem",
        hoverBorderColor: "{form.field.hover.border.color}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        lg: {
            height: "1.5rem",
            width: "1.5rem"
        },
        shadow: "{form.field.shadow}",
        sm: {
            height: "1rem",
            width: "1rem"
        },
        transitionDuration: "{form.field.transition.duration}",
        width: "1.25rem"
    },
    icon: {
        checkedColor: "{primary.contrast.color}",
        checkedHoverColor: "{primary.contrast.color}",
        color: "{form.field.color}",
        disabledColor: "{form.field.disabled.color}",
        lg: {
            size: "1rem"
        },
        size: "0.875rem",
        sm: {
            size: "0.75rem"
        }
    }
} satisfies CheckboxDesignTokens;