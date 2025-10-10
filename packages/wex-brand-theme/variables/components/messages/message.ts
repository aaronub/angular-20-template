import type { MessageDesignTokens } from '@primeuix/themes/types/message';

export default {
    root: {
        borderWidth: "1px",
        borderRadius: "{content.border.radius}",
        transitionDuration: "{transition.duration}"
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
        lg: {
            size: "1.125rem"
        },
        size: "1rem",
        sm: {
            size: "0.875rem"
        }
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
                outlined: {
                    borderColor: "{surface.0}",
                    color: "{surface.0}"
                },
                simple: {
                    color: "{surface.0}"
                }
            },
            error: {
                background: "color-mix(in srgb, {red.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                color: "{red.500}",
                closeButton: {
                    focusRing: {
                        color: "{red.500}",
                        shadow: "none"
                    },
                    hoverBackground: "rgba(255, 255, 255, 0.05)"
                },
                outlined: {
                    borderColor: "{red.500}",
                    color: "{red.500}"
                },
                simple: {
                    color: "{red.500}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
            },
            info: {
                background: "color-mix(in srgb, {blue.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                color: "{blue.500}",
                closeButton: {
                    focusRing: {
                        color: "{blue.500}",
                        shadow: "none"
                    },
                    hoverBackground: "rgba(255, 255, 255, 0.05)"
                },
                outlined: {
                    borderColor: "{blue.500}",
                    color: "{blue.500}"
                },
                simple: {
                    color: "{blue.500}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
            },
            secondary: {
                background: "{surface.800}",
                borderColor: "{surface.700}",
                color: "{surface.300}",
                closeButton: {
                    focusRing: {
                        color: "{surface.300}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.700}"
                },
                outlined: {
                    borderColor: "{surface.400}",
                    color: "{surface.400}"
                },
                simple: {
                    color: "{surface.400}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
            },
            success: {
                background: "#34bbaa29",
                borderColor: "#0061565c",
                color: "{teal.600}",
                closeButton: {
                    focusRing: {
                        color: "{teal.600}",
                        shadow: "none"
                    },
                    hoverBackground: "#ffffff0d"
                },
                outlined: {
                    borderColor: "{teal.600}",
                    color: "{teal.700}"
                },
                simple: {
                    color: "{teal.600}"
                },
                shadow: "0px 4px 8px 0px #0108040a"
            },
            warn: {
                background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
                color: "{yellow.500}",
                closeButton: {
                    focusRing: {
                        color: "{yellow.500}",
                        shadow: "none"
                    },
                    hoverBackground: "rgba(255, 255, 255, 0.05)"
                },
                outlined: {
                    borderColor: "{yellow.500}",
                    color: "{yellow.500}"
                },
                simple: {
                    color: "{yellow.500}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
            }
        },
        light: {
            contrast: {
                background: "{surface.900}",
                borderColor: "{surface.950}",
                color: "{surface.50}",
                closeButton: {
                    focusRing: {
                        color: "{surface.50}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.800}"
                },
                outlined: {
                    borderColor: "{surface.950}",
                    color: "{surface.950}"
                },
                simple: {
                    color: "{surface.950}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
            },
            error: {
                background: "color-mix(in srgb, {red.50}, transparent 5%)",
                borderColor: "{red.200}",
                color: "{red.600}",
                closeButton: {
                    focusRing: {
                        color: "{red.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{red.100}"
                },
                outlined: {
                    borderColor: "{red.600}",
                    color: "{red.600}"
                },
                simple: {
                    color: "{red.600}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
            },
            info: {
                background: "color-mix(in srgb, {blue.50}, transparent 5%)",
                borderColor: "{blue.200}",
                color: "{blue.600}",
                closeButton: {
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{blue.100}"
                },
                outlined: {
                    borderColor: "{blue.600}",
                    color: "{blue.600}"
                },
                simple: {
                    color: "{blue.600}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
            },
            secondary: {
                background: "{surface.100}",
                borderColor: "{surface.200}",
                color: "{surface.600}",
                closeButton: {
                    focusRing: {
                        color: "{surface.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.200}"
                },
                outlined: {
                    borderColor: "{surface.500}",
                    color: "{surface.500}"
                },
                simple: {
                    color: "{surface.500}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
            },
            success: {
                background: "#f0fdf4f2",
                borderColor: "{teal.200}",
                color: "{teal.600}",
                closeButton: {
                    focusRing: {
                        color: "{teal.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{teal.100}"
                },
                outlined: {
                    borderColor: "{teal.600}",
                    color: "{teal.700}"
                },
                simple: {
                    color: "{teal.600}"
                },
                shadow: "0px 4px 8px 0px #0108040a"
            },
            warn: {
                background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
                borderColor: "{yellow.200}",
                color: "{yellow.600}",
                closeButton: {
                    focusRing: {
                        color: "{yellow.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{yellow.100}"
                },
                outlined: {
                    borderColor: "{yellow.600}",
                    color: "{yellow.600}"
                },
                simple: {
                    color: "{yellow.600}"
                },
                shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
            }
        }
    },
    content: {
        gap: "0.5rem",
        lg: {
            padding: "0.625rem 0.875rem"
        },
        padding: "0.5rem 0.75rem",
        sm: {
            padding: "0.375rem 0.625rem"
        }
    },
    icon: {
        lg: {
            size: "1.25rem"
        },
        size: "1.125rem",
        sm: {
            size: "1rem"
        }
    },
    outlined: {
        root: {
            borderWidth: "1px"
        }
    },
    simple: {
        content: {
            padding: "0"
        }
    },
    text: {
        fontSize: "1rem",
        fontWeight: "500",
        lg: {
            fontSize: "1.125rem"
        },
        sm: {
            fontSize: "0.875rem"
        }
    }
} satisfies MessageDesignTokens;