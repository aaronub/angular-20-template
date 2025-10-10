import type { SliderDesignTokens } from '@primeuix/themes/types/slider';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    colorScheme: {
        dark: {
            handle: {
                content: {
                    background: "{surface.950}"
                }
            }
        },
        light: {
            handle: {
                content: {
                    background: "{surface.0}"
                }
            }
        }
    },
    handle: {
        background: "{content.border.color}",
        borderRadius: "50%",
        content: {
            background: "{surface.0}",
            borderRadius: "50%",
            height: "1.143rem",
            hoverBackground: "{content.background}",
            shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)",
            width: "1.143rem"
        },
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        height: "1.429rem",
        hoverBackground: "{content.border.color}",
        width: "1.429rem"
    },
    range: {
        background: "{primary.color}"
    },
    track: {
        background: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        size: "0.214rem"
    }
} satisfies SliderDesignTokens;