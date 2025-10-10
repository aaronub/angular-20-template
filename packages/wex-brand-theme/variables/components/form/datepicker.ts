import type { DatePickerDesignTokens } from '@primeuix/themes/types/datepicker';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    buttonbar: {
        borderColor: "{content.border.color}",
        padding: "0.5rem 0 0 0"
    },
    colorScheme: {
        dark: {
            dropdown: {
                activeBackground: "{surface.600}",
                activeColor: "{surface.100}",
                background: "{surface.800}",
                color: "{surface.300}",
                hoverBackground: "{surface.700}",
                hoverColor: "{surface.200}"
            },
            today: {
                background: "{surface.700}",
                color: "{surface.0}"
            }
        },
        light: {
            dropdown: {
                activeBackground: "{surface.300}",
                activeColor: "{surface.800}",
                background: "{surface.100}",
                color: "{surface.600}",
                hoverBackground: "{surface.200}",
                hoverColor: "{surface.700}"
            },
            today: {
                background: "{surface.200}",
                color: "{surface.900}"
            }
        }
    },
    date: {
        borderRadius: "1rem",
        color: "{content.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        height: "2rem",
        hoverBackground: "{content.hover.background}",
        hoverColor: "{content.hover.color}",
        padding: "0.25rem",
        rangeSelectedBackground: "{highlight.background}",
        rangeSelectedColor: "{highlight.color}",
        selectedBackground: "{primary.color}",
        selectedColor: "{primary.contrast.color}",
        width: "2rem"
    },
    dayView: {
        margin: "0.5rem 0 0 0"
    },
    dropdown: {
        activeBorderColor: "{form.field.border.color}",
        borderRadius: "{form.field.border.radius}",
        borderColor: "{form.field.border.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        hoverBorderColor: "{form.field.border.color}",
        lg: {
            width: "3rem"
        },
        sm: {
            width: "2rem"
        },
        width: "2.5rem"
    },
    group: {
        borderColor: "{content.border.color}",
        gap: "{overlay.popover.padding}"
    },
    header: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        color: "{content.color}",
        padding: "0 0 0.5rem 0"
    },
    inputIcon: {
        color: "{form.field.icon.color}"
    },
    month: {
        borderRadius: "{content.border.radius}",
        padding: "0.375rem"
    },
    monthView: {
        margin: "0.5rem 0 0 0"
    },
    panel: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        padding: "{overlay.popover.padding}",
        shadow: "{overlay.popover.shadow}"
    },
    selectMonth: {
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        hoverBackground: "{content.hover.background}",
        hoverColor: "{content.hover.color}",
        padding: "0.25rem 0.5rem"
    },
    selectYear: {
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        hoverBackground: "{content.hover.background}",
        hoverColor: "{content.hover.color}",
        padding: "0.25rem 0.5rem"
    },
    timePicker: {
        borderColor: "{content.border.color}",
        buttonGap: "0.25rem",
        gap: "0.5rem",
        padding: "0.5rem 0 0 0"
    },
    title: {
        fontWeight: "500",
        gap: "0.5rem"
    },
    weekDay: {
        color: "{content.color}",
        fontWeight: "500",
        padding: "0.25rem"
    },
    year: {
        borderRadius: "{content.border.radius}",
        padding: "0.375rem"
    },
    yearView: {
        margin: "0.5rem 0 0 0"
    }
} satisfies DatePickerDesignTokens;