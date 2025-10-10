import type { CardDesignTokens } from '@primeuix/themes/types/card';

 export default {
    root: {
        background: "{content.background}",
        borderRadius: "{border.radius.xl}",
        color: "{content.color}",
        shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
    },
    body: {
        gap: "0.5rem",
        padding: "1.25rem"
    },
    caption: {
        gap: "0.5rem"
    },
    subtitle: {
        color: "{text.muted.color}"
    },
    title: {
        fontSize: "1.25rem",
        fontWeight: "500"
    }
} satisfies CardDesignTokens;