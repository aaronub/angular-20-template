import type { TabsDesignTokens } from '@primeuix/themes/types/tabs';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    activeBar: {
        background: "{primary.color}",
        bottom: "-1px",
        height: "1px"
    },
    colorScheme: {
        dark: {
            navButton: {
                shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
            }
        },
        light: {
            navButton: {
                shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
            }
        }
    },
    navButton: {
        background: "{content.background}",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "-1px",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        hoverColor: "{text.color}",
        width: "2.5rem"
    },
    tab: {
        activeBackground: "transparent",
        activeBorderColor: "{primary.color}",
        activeColor: "{primary.color}",
        background: "transparent",
        borderColor: "{content.border.color}",
        borderWidth: "0 0 1px 0",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "-1px",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        fontWeight: "600",
        gap: "0.5rem",
        hoverBackground: "transparent",
        hoverBorderColor: "{content.border.color}",
        hoverColor: "{text.color}",
        margin: "0 0 -1px 0",
        padding: "1rem 1.125rem"
    },
    tablist: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderWidth: "0 0 1px 0"
    },
    tabpanel: {
        background: "{content.background}",
        color: "{content.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "inset {focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        padding: "0.875rem 1.125rem 1.125rem 1.125rem"
    }
} satisfies TabsDesignTokens;