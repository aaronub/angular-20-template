import type { PanelDesignTokens } from '@primeuix/themes/types/panel';

export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}"
    },
    content: {
        padding: "0 1.125rem 1.125rem 1.125rem"
    },
    footer: {
        padding: "0 1.125rem 1.125rem 1.125rem"
    },
    header: {
        background: "transparent",
        borderColor: "{content.border.color}",
        borderRadius: "0",
        borderWidth: "0",
        color: "{text.color}",
        padding: "1.125rem"
    },
    title: {
        fontWeight: "600"
    },
    toggleableHeader: {
        padding: "0.375rem 1.125rem"
    }
} satisfies PanelDesignTokens;