import type { RatingDesignTokens } from '@primeuix/themes/types/rating';

export default {
    root: {
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gap: "0.25rem",
        transitionDuration: "{transition.duration}"
    },
    icon: {
        activeColor: "{primary.color}",
        color: "{text.muted.color}",
        hoverColor: "{primary.color}",
        size: "1rem"
    }
} satisfies RatingDesignTokens;