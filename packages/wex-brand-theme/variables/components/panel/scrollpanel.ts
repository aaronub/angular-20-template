import type { ScrollPanelDesignTokens } from '@primeuix/themes/types/scrollpanel';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    bar: {
        borderRadius: "{border.radius.sm}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        size: "0.643rem"
    },
    colorScheme: {
        dark: {
            bar: {
                background: "{surface.800}"
            }
        },
        light: {
            bar: {
                background: "{surface.100}"
            }
        }
    }
} satisfies ScrollPanelDesignTokens;