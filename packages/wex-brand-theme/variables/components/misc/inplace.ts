import type { InplaceDesignTokens } from '@primeuix/themes/types/inplace';

export default {
    root: {
        borderRadius: "{content.border.radius}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        padding: "{form.field.padding.y} {form.field.padding.x}",
        transitionDuration: "{transition.duration}"
    },
    display: {
        hoverBackground: "{content.hover.background}",
        hoverColor: "{content.hover.color}"
    }
} satisfies InplaceDesignTokens;