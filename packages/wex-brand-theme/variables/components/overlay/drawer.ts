import type { DrawerDesignTokens } from '@primeuix/themes/types/drawer';

 export default {
    root: {
        background: "{overlay.modal.background}",
        borderColor: "{overlay.modal.border.color}",
        color: "{overlay.modal.color}",
        shadow: "{overlay.modal.shadow}"
    },
    content: {
        padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
    },
    footer: {
        padding: "{overlay.modal.padding}"
    },
    header: {
        padding: "{overlay.modal.padding}"
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "600"
    }
} satisfies DrawerDesignTokens;