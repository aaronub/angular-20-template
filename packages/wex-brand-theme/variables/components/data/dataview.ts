import type { DataViewDesignTokens } from '@primeuix/themes/types/dataview';

 export default {
    root: {
        borderColor: "transparent",
        borderRadius: "0",
        borderWidth: "0",
        padding: "0"
    },
    content: {
        background: "{content.background}",
        borderColor: "transparent",
        borderRadius: "0",
        borderWidth: "0",
        color: "{content.color}",
        padding: "0"
    },
    footer: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "0",
        borderWidth: "1px 0 0 0",
        color: "{content.color}",
        padding: "0.75rem 1rem"
    },
    header: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "0",
        borderWidth: "0 0 1px 0",
        color: "{content.color}",
        padding: "0.75rem 1rem"
    },
    paginatorBottom: {
        borderColor: "{content.border.color}",
        borderWidth: "1px 0 0 0"
    },
    paginatorTop: {
        borderColor: "{content.border.color}",
        borderWidth: "0 0 1px 0"
    }
} satisfies DataViewDesignTokens;