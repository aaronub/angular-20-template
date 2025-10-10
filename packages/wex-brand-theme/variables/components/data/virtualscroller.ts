import type { VirtualScrollerDesignTokens } from '@primeuix/themes/types/virtualscroller';

export default {
    loader: {
        icon: {
            size: "2rem"
        },
        mask: {
            background: "{content.background}",
            color: "{text.muted.color}"
        }
    }
} satisfies VirtualScrollerDesignTokens;