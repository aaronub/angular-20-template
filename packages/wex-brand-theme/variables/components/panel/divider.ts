import type { DividerDesignTokens } from '@primeuix/themes/types/divider';

 export default {
    root: {
        borderColor: "{content.border.color}"
    },
    content: {
        background: "{content.background}",
        color: "{text.color}"
    },
    horizontal: {
        content: {
            padding: "0 0.5rem"
        },
        margin: "1rem 0",
        padding: "0 1rem"
    },
    vertical: {
        content: {
            padding: "0.5rem 0"
        },
        margin: "0 1rem",
        padding: "0.5rem 0"
    }
} satisfies DividerDesignTokens;