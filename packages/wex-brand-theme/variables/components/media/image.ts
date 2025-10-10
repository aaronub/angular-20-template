import type { ImageDesignTokens } from '@primeuix/themes/types/image';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    action: {
        borderRadius: "1.5rem",
        color: "{surface.50}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            width: "{focus.ring.width}"
        },
        hoverBackground: "#ffffff1a",
        hoverColor: "{surface.0}",
        iconSize: "1.5rem",
        size: "3rem"
    },
    preview: {
        icon: {
            size: "1.5rem"
        },
        mask: {
            background: "{mask.background}",
            color: "{mask.color}"
        }
    },
    toolbar: {
        background: "#ffffff1a",
        blur: "8px",
        borderColor: "#ffffff33",
        borderRadius: "30px",
        borderWidth: "1px",
        gap: "0.5rem",
        padding: "0.5rem",
        position: {
            right: "1rem",
            top: "1rem"
        }
    }
} satisfies ImageDesignTokens;