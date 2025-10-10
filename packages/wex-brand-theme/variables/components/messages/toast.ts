import type { ToastDesignTokens } from '@primeuix/themes/types/toast';

export default {
    root: {
        borderRadius: "{content.border.radius}",
        borderWidth: "1px",
        transitionDuration: "{transition.duration}",
        width: "25rem"
    },
    closeButton: {
        borderRadius: "50%",
        focusRing: {
            offset: "{focus.ring.offset}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        height: "1.75rem",
        width: "1.75rem"
    },
    closeIcon: {
        size: "1rem"
    },
    colorScheme: {
        dark: {
            contrast: {
                background: "{surface.0}",
                borderColor: "{surface.100}",
                color: "{surface.950}",
                closeButton: {
                    focusRing: {
                        color: "{surface.950}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.100}"
                },
                detailColor: "{surface.950}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
            },
            error: {
                background: "color-mix(in srgb, {red.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                closeButton: {
                    focusRing: {
                        color: "{red.500}",
                        shadow: "none"
                    },
                    hoverBackground: "rgba(255, 255, 255, 0.05)"
                },
                color: "{red.500}",
                detailColor: "{surface.0}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
            },
            info: {
                background: "color-mix(in srgb, {blue.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                closeButton: {
                    focusRing: {
                        color: "{blue.500}",
                        shadow: "none"
                    },
                    hoverBackground: "rgba(255, 255, 255, 0.05)"
                },
                color: "{blue.500}",
                detailColor: "{surface.0}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
            },
            root: {
                blur: "10px"
            },
            secondary: {
                background: "{surface.800}",
                borderColor: "{surface.700}",
                closeButton: {
                    focusRing: {
                        color: "{surface.300}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.700}"
                },
                color: "{surface.300}",
                detailColor: "{surface.0}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
            },
            success: {
                background: "#00837529",
                borderColor: "{teal.700}",
                closeButton: {
                    focusRing: {
                        color: "{teal.500}",
                        shadow: "none"
                    },
                    hoverBackground: "#ffffff0d"
                },
                color: "{teal.300}",
                detailColor: "{surface.0}",
                shadow: "0px 4px 8px 0px #0108040a"
            },
            warn: {
                background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
                closeButton: {
                    focusRing: {
                        color: "{yellow.500}",
                        shadow: "none"
                    },
                    hoverBackground: "rgba(255, 255, 255, 0.05)"
                },
                color: "{yellow.500}",
                detailColor: "{surface.0}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
            }
        },
        light: {
            contrast: {
                background: "{surface.900}",
                borderColor: "{surface.950}",
                closeButton: {
                    focusRing: {
                        color: "{surface.50}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.800}"
                },
                color: "{surface.50}",
                detailColor: "{surface.0}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
            },
            error: {
                background: "color-mix(in srgb, {red.50}, transparent 5%)",
                borderColor: "{red.200}",
                closeButton: {
                    focusRing: {
                        color: "{red.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{red.100}"
                },
                color: "{red.600}",
                detailColor: "{surface.700}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
            },
            info: {
                background: "color-mix(in srgb, {blue.50}, transparent 5%)",
                borderColor: "{blue.200}",
                closeButton: {
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{blue.100}"
                },
                color: "{blue.600}",
                detailColor: "{surface.700}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
            },
            root: {
                blur: "1.5px"
            },
            secondary: {
                background: "{surface.100}",
                borderColor: "{surface.200}",
                closeButton: {
                    focusRing: {
                        color: "{surface.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.200}"
                },
                color: "{surface.600}",
                detailColor: "{surface.700}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
            },
            success: {
                background: "#f0fdf4f2",
                borderColor: "{teal.400}",
                closeButton: {
                    focusRing: {
                        color: "{teal.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{teal.100}"
                },
                color: "{teal.700}",
                detailColor: "{surface.700}",
                shadow: "0px 4px 8px 0px #0108040a"
            },
            warn: {
                background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
                borderColor: "{yellow.200}",
                closeButton: {
                    focusRing: {
                        color: "{yellow.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{yellow.100}"
                },
                color: "{yellow.600}",
                detailColor: "{surface.700}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
            }
        }
    },
    content: {
        gap: "0.5rem",
        padding: "{overlay.popover.padding}"
    },
    detail: {
        fontSize: "0.875rem",
        fontWeight: "500"
    },
    icon: {
        size: "1.125rem"
    },
    summary: {
        fontSize: "1rem",
        fontWeight: "500"
    },
    text: {
        gap: "0.5rem"
    }
} satisfies ToastDesignTokens;