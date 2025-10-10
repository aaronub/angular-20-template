import type { KnobDesignTokens } from '@primeuix/themes/types/knob';

export default {
    root: {
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        transitionDuration: "{transition.duration}"
    },
    range: {
        background: "{content.border.color}"
    },
    text: {
        color: "{text.muted.color}"
    },
    value: {
        background: "{primary.color}"
    }
} satisfies KnobDesignTokens;