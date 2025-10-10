import type { ColorPickerDesignTokens } from '@primeuix/themes/types/colorpicker';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    colorScheme: {
        dark: {
            handle: {
                color: "{surface.0}"
            },
            panel: {
                background: "{surface.900}",
                borderColor: "{surface.700}"
            }
        },
        light: {
            handle: {
                color: "{surface.0}"
            },
            panel: {
                background: "{surface.800}",
                borderColor: "{surface.900}"
            }
        }
    },
    panel: {
        borderRadius: "{overlay.popover.borderRadius}",
        shadow: "{overlay.popover.shadow}"
    },
    preview: {
        borderRadius: "{form.field.border.radius}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        height: "1.5rem",
        width: "1.5rem"
    }
} satisfies ColorPickerDesignTokens;