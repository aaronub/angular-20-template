import type { PopoverDesignTokens } from '@primeuix/themes/types/popover';

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
        padding: "{overlay.popover.padding}"
    }
} satisfies PopoverDesignTokens;