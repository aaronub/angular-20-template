import type { IftaLabelDesignTokens } from '@primeuix/themes/types/iftalabel';

export default {
    root: {
        color: "{form.field.float.label.color}",
        focusColor: "{form.field.float.label.focus.color}",
        fontSize: "0.75rem",
        fontWeight: "400",
        invalidColor: "{form.field.float.label.invalid.color}",
        positionX: "{form.field.padding.x}",
        top: "{form.field.padding.y}",
        transitionDuration: "0.2s"
    },
    input: {
        paddingBottom: "{form.field.padding.y}",
        paddingTop: "1.5rem"
    }
} satisfies IftaLabelDesignTokens;