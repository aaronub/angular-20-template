import type { DialogDesignTokens } from '@primeuix/themes/types/dialog';

 export default {
    root: {
        background: "{overlay.modal.background}",
        borderColor: "{overlay.modal.border.color}",
        borderRadius: "{overlay.modal.border.radius}",
        color: "{overlay.modal.color}",
        shadow: "{overlay.modal.shadow}"
    },
    content: {
        padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
    },
    footer: {
        gap: "0.5rem",
        padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
    },
    header: {
        gap: "0.5rem",
        padding: "{overlay.modal.padding}"
    },
    title: {
        fontSize: "1.25rem",
        fontWeight: "600"
    }
} satisfies DialogDesignTokens;