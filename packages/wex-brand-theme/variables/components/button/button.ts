import type { ButtonDesignTokens } from '@primeuix/themes/types/button';

export default {
    root: {
        badgeSize: "1rem",
        borderRadius: "{form.field.border.radius}",
        focusRing: {
            offset: "{focus.ring.offset}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gap: "0.5rem",
        iconOnlyWidth: "2.5rem",
        label: {
            fontWeight: "500"
        },
        lg: {
            fontSize: "{form.field.lg.font.size}",
            iconOnlyWidth: "3rem",
            paddingX: "{form.field.lg.padding.x}",
            paddingY: "{form.field.lg.padding.y}"
        },
        paddingX: "{form.field.padding.x}",
        paddingY: "{form.field.padding.y}",
        raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        roundedBorderRadius: "2rem",
        sm: {
            fontSize: "{form.field.sm.font.size}",
            iconOnlyWidth: "2rem",
            paddingX: "{form.field.sm.padding.x}",
            paddingY: "{form.field.sm.padding.y}"
        },
        transitionDuration: "{form.field.transition.duration}"
    },
    colorScheme: {
        dark: {
            link: {
                activeColor: "{primary.color}",
                color: "{primary.color}",
                hoverColor: "{primary.color}"
            },
            outlined: {
                contrast: {
                    activeBackground: "{surface.700}",
                    borderColor: "{surface.500}",
                    color: "{surface.0}",
                    hoverBackground: "{surface.800}"
                },
                danger: {
                    activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
                    borderColor: "{red.700}",
                    color: "{red.400}",
                    hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)"
                },
                help: {
                    activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
                    borderColor: "{purple.700}",
                    color: "{purple.400}",
                    hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)"
                },
                info: {
                    activeBackground: "color-mix(in srgb, {blue.700}, transparent 84%)",
                    borderColor: "{blue.700}",
                    color: "{blue.700}",
                    hoverBackground: "color-mix(in srgb, {blue.700}, transparent 96%)"
                },
                plain: {
                    activeBackground: "{surface.700}",
                    borderColor: "{surface.600}",
                    color: "{surface.0}",
                    hoverBackground: "{surface.800}"
                },
                primary: {
                    activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
                    borderColor: "{primary.700}",
                    color: "{primary.color}",
                    hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)"
                },
                secondary: {
                    activeBackground: "rgba(255,255,255,0.16)",
                    borderColor: "{surface.700}",
                    color: "{surface.400}",
                    hoverBackground: "rgba(255,255,255,0.04)"
                },
                success: {
                    activeBackground: "color-mix(in srgb, {teal.400}, transparent 84%)",
                    borderColor: "{teal.700}",
                    color: "{teal.400}",
                    hoverBackground: "color-mix(in srgb, {teal.400}, transparent 96%)"
                },
                warn: {
                    activeBackground: "color-mix(in srgb, {yellow.900}, transparent 84%)",
                    borderColor: "{yellow.900}",
                    color: "{yellow.900}",
                    hoverBackground: "color-mix(in srgb, {yellow.900}, transparent 96%)"
                }
            },
            root: {
                contrast: {
                    activeBackground: "{surface.800}",
                    activeBorderColor: "{surface.800}",
                    activeColor: "{surface.0}",
                    background: "{surface.0}",
                    borderColor: "{surface.0}",
                    color: "{surface.950}",
                    focusRing: {
                        color: "{surface.0}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.100}",
                    hoverBorderColor: "{surface.100}",
                    hoverColor: "{surface.950}"
                },
                danger: {
                    activeBackground: "{red.200}",
                    activeBorderColor: "{red.200}",
                    activeColor: "{red.950}",
                    background: "{red.400}",
                    borderColor: "{red.400}",
                    color: "{red.950}",
                    focusRing: {
                        color: "{red.400}",
                        shadow: "none"
                    },
                    hoverBackground: "{red.300}",
                    hoverBorderColor: "{red.300}",
                    hoverColor: "{red.950}"
                },
                help: {
                    activeBackground: "{purple.200}",
                    activeBorderColor: "{purple.200}",
                    activeColor: "{purple.950}",
                    background: "{purple.400}",
                    borderColor: "{purple.400}",
                    color: "{purple.950}",
                    focusRing: {
                        color: "{purple.400}",
                        shadow: "none"
                    },
                    hoverBackground: "{purple.300}",
                    hoverBorderColor: "{purple.300}",
                    hoverColor: "{purple.950}"
                },
                info: {
                    activeBackground: "{blue.900}",
                    activeBorderColor: "{blue.900}",
                    activeColor: "#ffffff",
                    background: "{blue.700}",
                    borderColor: "{blue.700}",
                    color: "{surface.0}",
                    focusRing: {
                        color: "{blue.700}",
                        shadow: "none"
                    },
                    hoverBackground: "{blue.800}",
                    hoverBorderColor: "{blue.800}",
                    hoverColor: "#ffffff"
                },
                primary: {
                    activeBackground: "{primary.active.color}",
                    activeBorderColor: "{primary.active.color}",
                    activeColor: "{primary.contrast.color}",
                    background: "{primary.color}",
                    borderColor: "{primary.color}",
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{primary.color}",
                        shadow: "none"
                    },
                    hoverBackground: "{primary.hover.color}",
                    hoverBorderColor: "{primary.hover.color}",
                    hoverColor: "{primary.contrast.color}"
                },
                secondary: {
                    activeBackground: "{surface.600}",
                    activeBorderColor: "{surface.600}",
                    activeColor: "{surface.100}",
                    background: "{surface.800}",
                    borderColor: "{surface.800}",
                    color: "{surface.300}",
                    focusRing: {
                        color: "{surface.300}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.700}",
                    hoverBorderColor: "{surface.700}",
                    hoverColor: "{surface.200}"
                },
                success: {
                    activeBackground: "{teal.700}",
                    activeBorderColor: "{teal.700}",
                    activeColor: "{surface.0}",
                    background: "{teal.700}",
                    borderColor: "{teal.700}",
                    color: "{surface.0}",
                    focusRing: {
                        color: "{teal.700}",
                        shadow: "none"
                    },
                    hoverBackground: "{teal.800}",
                    hoverBorderColor: "{teal.800}",
                    hoverColor: "{cyan.50}"
                },
                warn: {
                    activeBackground: "{yellow.950}",
                    activeBorderColor: "{yellow.950}",
                    activeColor: "{surface.0}",
                    background: "{yellow.900}",
                    borderColor: "{yellow.900}",
                    color: "{surface.0}",
                    focusRing: {
                        color: "{yellow.900}",
                        shadow: "none"
                    },
                    hoverBackground: "{yellow.950}",
                    hoverBorderColor: "{yellow.950}",
                    hoverColor: "{surface.0}"
                }
            },
            text: {
                contrast: {
                    activeBackground: "{surface.700}",
                    color: "{surface.0}",
                    hoverBackground: "{surface.800}"
                },
                danger: {
                    activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
                    color: "{red.400}",
                    hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)"
                },
                help: {
                    activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
                    color: "{purple.400}",
                    hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)"
                },
                info: {
                    activeBackground: "color-mix(in srgb, {blue.700}, transparent 84%)",
                    color: "{blue.700}",
                    hoverBackground: "color-mix(in srgb, {blue.700}, transparent 96%)"
                },
                plain: {
                    activeBackground: "{surface.700}",
                    color: "{surface.0}",
                    hoverBackground: "{surface.800}"
                },
                primary: {
                    activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
                    color: "{primary.color}",
                    hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)"
                },
                secondary: {
                    activeBackground: "{surface.700}",
                    color: "{surface.400}",
                    hoverBackground: "{surface.800}"
                },
                success: {
                    activeBackground: "color-mix(in srgb, {teal.400}, transparent 84%)",
                    color: "{teal.400}",
                    hoverBackground: "color-mix(in srgb, {teal.400}, transparent 96%)"
                },
                warn: {
                    activeBackground: "color-mix(in srgb, {yellow.900}, transparent 84%)",
                    color: "{yellow.900}",
                    hoverBackground: "color-mix(in srgb, {yellow.900}, transparent 96%)"
                }
            }
        },
        light: {
            link: {
                activeColor: "{primary.color}",
                color: "{primary.color}",
                hoverColor: "{primary.color}"
            },
            outlined: {
                contrast: {
                    activeBackground: "{surface.100}",
                    borderColor: "{surface.700}",
                    color: "{surface.950}",
                    hoverBackground: "{surface.50}"
                },
                danger: {
                    activeBackground: "{red.100}",
                    borderColor: "{red.200}",
                    color: "{red.500}",
                    hoverBackground: "{red.50}"
                },
                help: {
                    activeBackground: "{purple.100}",
                    borderColor: "{purple.200}",
                    color: "{purple.500}",
                    hoverBackground: "{purple.50}"
                },
                info: {
                    activeBackground: "{blue.100}",
                    borderColor: "{blue.200}",
                    color: "{blue.700}",
                    hoverBackground: "{blue.50}"
                },
                plain: {
                    activeBackground: "{surface.100}",
                    borderColor: "{surface.200}",
                    color: "{surface.700}",
                    hoverBackground: "{surface.50}"
                },
                primary: {
                    activeBackground: "{primary.100}",
                    borderColor: "{primary.200}",
                    color: "{primary.color}",
                    hoverBackground: "{primary.50}"
                },
                secondary: {
                    activeBackground: "{surface.100}",
                    borderColor: "{surface.200}",
                    color: "{surface.500}",
                    hoverBackground: "{surface.50}"
                },
                success: {
                    activeBackground: "{teal.100}",
                    borderColor: "{teal.200}",
                    color: "{teal.500}",
                    hoverBackground: "{teal.50}"
                },
                warn: {
                    activeBackground: "{yellow.100}",
                    borderColor: "{yellow.200}",
                    color: "{yellow.900}",
                    hoverBackground: "{yellow.50}"
                }
            },
            root: {
                contrast: {
                    activeBackground: "{surface.800}",
                    activeBorderColor: "{surface.800}",
                    activeColor: "{surface.0}",
                    background: "{surface.950}",
                    borderColor: "{surface.950}",
                    color: "{surface.0}",
                    focusRing: {
                        color: "{surface.950}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.900}",
                    hoverBorderColor: "{surface.900}",
                    hoverColor: "{surface.0}"
                },
                danger: {
                    activeBackground: "{red.700}",
                    activeBorderColor: "{red.700}",
                    activeColor: "#ffffff",
                    background: "{red.500}",
                    borderColor: "{red.500}",
                    color: "#ffffff",
                    focusRing: {
                        color: "{red.500}",
                        shadow: "none"
                    },
                    hoverBackground: "{red.600}",
                    hoverBorderColor: "{red.600}",
                    hoverColor: "#ffffff"
                },
                help: {
                    activeBackground: "{purple.700}",
                    activeBorderColor: "{purple.700}",
                    activeColor: "#ffffff",
                    background: "{purple.500}",
                    borderColor: "{purple.500}",
                    color: "#ffffff",
                    focusRing: {
                        color: "{purple.500}",
                        shadow: "none"
                    },
                    hoverBackground: "{purple.600}",
                    hoverBorderColor: "{purple.600}",
                    hoverColor: "#ffffff"
                },
                info: {
                    activeBackground: "{blue.900}",
                    activeBorderColor: "{blue.900}",
                    activeColor: "#ffffff",
                    background: "{blue.700}",
                    borderColor: "{blue.700}",
                    color: "#ffffff",
                    focusRing: {
                        color: "{blue.700}",
                        shadow: "none"
                    },
                    hoverBackground: "{blue.800}",
                    hoverBorderColor: "{blue.800}",
                    hoverColor: "#ffffff"
                },
                primary: {
                    activeBackground: "{primary.active.color}",
                    activeBorderColor: "{primary.active.color}",
                    activeColor: "{primary.contrast.color}",
                    background: "{primary.color}",
                    borderColor: "{primary.color}",
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{primary.color}",
                        shadow: "none"
                    },
                    hoverBackground: "{primary.hover.color}",
                    hoverBorderColor: "{primary.hover.color}",
                    hoverColor: "{primary.contrast.color}"
                },
                secondary: {
                    activeBackground: "{surface.300}",
                    activeBorderColor: "{surface.300}",
                    activeColor: "{surface.800}",
                    background: "{surface.100}",
                    borderColor: "{surface.100}",
                    color: "{surface.600}",
                    focusRing: {
                        color: "{surface.600}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.200}",
                    hoverBorderColor: "{surface.200}",
                    hoverColor: "{surface.700}"
                },
                success: {
                    activeBackground: "{teal.900}",
                    activeBorderColor: "{teal.900}",
                    activeColor: "#ffffff",
                    background: "{teal.700}",
                    borderColor: "{teal.700}",
                    color: "{surface.0}",
                    focusRing: {
                        color: "{teal.700}",
                        shadow: "none"
                    },
                    hoverBackground: "{teal.800}",
                    hoverBorderColor: "{teal.800}",
                    hoverColor: "{surface.0}"
                },
                warn: {
                    activeBackground: "{yellow.950}",
                    activeBorderColor: "{yellow.950}",
                    activeColor: "#ffffff",
                    background: "{yellow.900}",
                    borderColor: "{yellow.900}",
                    color: "#ffffff",
                    focusRing: {
                        color: "{yellow.900}",
                        shadow: "none"
                    },
                    hoverBackground: "{yellow.950}",
                    hoverBorderColor: "{yellow.950}",
                    hoverColor: "#ffffff"
                }
            },
            text: {
                contrast: {
                    activeBackground: "{surface.100}",
                    color: "{surface.950}",
                    hoverBackground: "{surface.50}"
                },
                danger: {
                    activeBackground: "{red.100}",
                    color: "{red.500}",
                    hoverBackground: "{red.50}"
                },
                help: {
                    activeBackground: "{purple.100}",
                    color: "{purple.500}",
                    hoverBackground: "{purple.50}"
                },
                info: {
                    activeBackground: "{blue.100}",
                    color: "{blue.700}",
                    hoverBackground: "{blue.50}"
                },
                plain: {
                    activeBackground: "{surface.100}",
                    color: "{surface.700}",
                    hoverBackground: "{surface.50}"
                },
                primary: {
                    activeBackground: "{primary.100}",
                    color: "{primary.color}",
                    hoverBackground: "{primary.50}"
                },
                secondary: {
                    activeBackground: "{surface.100}",
                    color: "{surface.500}",
                    hoverBackground: "{surface.50}"
                },
                success: {
                    activeBackground: "{teal.100}",
                    color: "{teal.500}",
                    hoverBackground: "{teal.50}"
                },
                warn: {
                    activeBackground: "{yellow.100}",
                    color: "{yellow.900}",
                    hoverBackground: "{yellow.50}"
                }
            }
        }
    }
} satisfies ButtonDesignTokens;