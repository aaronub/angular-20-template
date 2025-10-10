import type { FloatLabelDesignTokens } from '@primeuix/themes/types/floatlabel';

export default {
    root: {
        activeColor: "{form.field.float.label.active.color}",
        color: "{form.field.float.label.color}",
        focusColor: "{form.field.float.label.focus.color}",
        fontWeight: "500",
        invalidColor: "{form.field.float.label.invalid.color}",
        positionX: "{form.field.padding.x}",
        positionY: "{form.field.padding.y}",
        transitionDuration: "0.2s",
        active: {
            fontSize: "0.75rem",
            fontWeight: "400"
        }
    },
    in: {
        active: {
            top: "0.5rem"
        },
        input: {
            paddingBottom: "0.5rem",
            paddingTop: "1.5rem"
        }
    },
    on: {
        active: {
            background: "{form.field.background}",
            padding: "0 0.125rem"
        },
        borderRadius: "0.143rem"
    },
    over: {
        active: {
            top: "-1.25rem"
        }
    }
} satisfies FloatLabelDesignTokens;