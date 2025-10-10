import type { TerminalDesignTokens } from '@primeuix/themes/types/terminal';

export default {
    root: {
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        borderRadius: "{form.field.border.radius}",
        color: "{form.field.color}",
        height: "18rem",
        padding: "{form.field.padding.y} {form.field.padding.x}"
    },
    commandResponse: {
        margin: "2px 0"
    },
    prompt: {
        gap: "0.25rem"
    }
} satisfies TerminalDesignTokens;