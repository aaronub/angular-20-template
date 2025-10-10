import type { GalleriaDesignTokens } from '@primeuix/themes/types/galleria';

export default {
    root: {
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        borderWidth: "1px",
        transitionDuration: "{transition.duration}"
    },
    caption: {
        background: "#00000080",
        color: "{surface.100}",
        padding: "1rem"
    },
    closeButton: {
        background: "#ffffff1a",
        borderRadius: "1.5rem",
        color: "{surface.50}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gutter: "0.5rem",
        hoverBackground: "#ffffff33",
        hoverColor: "{surface.0}",
        size: "3rem"
    },
    closeButtonIcon: {
        size: "1.5rem"
    },
    colorScheme: {
        dark: {
            indicatorButton: {
                background: "{surface.700}",
                hoverBackground: "{surface.600}"
            },
            thumbnailNavButton: {
                color: "{surface.400}",
                hoverBackground: "{surface.700}",
                hoverColor: "{surface.0}"
            }
        },
        light: {
            indicatorButton: {
                background: "{surface.200}",
                hoverBackground: "{surface.300}"
            },
            thumbnailNavButton: {
                color: "{surface.600}",
                hoverBackground: "{surface.100}",
                hoverColor: "{surface.700}"
            }
        }
    },
    indicatorButton: {
        activeBackground: "{primary.color}",
        borderRadius: "0.5rem",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        height: "1rem",
        width: "1rem"
    },
    indicatorList: {
        gap: "0.5rem",
        padding: "1rem"
    },
    insetIndicatorButton: {
        activeBackground: "#ffffffe5",
        background: "#ffffff66",
        hoverBackground: "#ffffff99"
    },
    insetIndicatorList: {
        background: "#00000080"
    },
    navButton: {
        background: "#ffffff1a",
        color: "{surface.100}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gutter: "0.5rem",
        hoverBackground: "#ffffff33",
        hoverColor: "{surface.0}",
        next: {
            borderRadius: "1.5rem"
        },
        prev: {
            borderRadius: "1.5rem"
        },
        size: "3rem"
    },
    navIcon: {
        size: "1.5rem"
    },
    thumbnailNavButton: {
        borderRadius: "{content.border.radius}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gutter: "0.5rem",
        size: "2rem"
    },
    thumbnailNavButtonIcon: {
        size: "1rem"
    },
    thumbnailsContent: {
        background: "{content.background}",
        padding: "1rem 0.25rem"
    }
} satisfies GalleriaDesignTokens;