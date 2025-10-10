import type { ConfirmPopupDesignTokens } from '@primeuix/themes/types/confirmpopup';

 export default {
    root: {
        arrowOffset: "1.25rem",
        background: "{overlay.popover.background}",
        borderColor: "{overlay.popover.border.color}",
        borderRadius: "{overlay.popover.border.radius}",
        color: "{overlay.popover.color}",
        gutter: "0.714rem",
        shadow: "{overlay.popover.shadow}"
    },
    content: {
        gap: "1rem",
        padding: "{overlay.popover.padding}"
    },
    footer: {
        gap: "0.5rem",
        padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
    },
    icon: {
        color: "{overlay.popover.color}",
        size: "1.5rem"
    }
} satisfies ConfirmPopupDesignTokens;