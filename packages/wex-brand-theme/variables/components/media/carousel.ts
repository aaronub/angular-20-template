import type { CarouselDesignTokens } from '@primeuix/themes/types/carousel';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    colorScheme: {
        dark: {
            indicator: {
                activeBackground: "{primary.color}",
                background: "{surface.700}",
                hoverBackground: "{surface.600}"
            }
        },
        light: {
            indicator: {
                activeBackground: "{primary.color}",
                background: "{surface.200}",
                hoverBackground: "{surface.300}"
            }
        }
    },
    content: {
        gap: "0.25rem"
    },
    indicator: {
        borderRadius: "{content.border.radius}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        height: "0.5rem",
        width: "2rem"
    },
    indicatorList: {
        gap: "0.5rem",
        padding: "1rem"
    }
} satisfies CarouselDesignTokens;