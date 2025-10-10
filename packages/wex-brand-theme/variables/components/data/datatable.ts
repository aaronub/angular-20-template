import type { DataTableDesignTokens } from '@primeuix/themes/types/datatable';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    bodyCell: {
        borderColor: "{datatable.border.color}",
        lg: {
            padding: "1rem 1.25rem"
        },
        padding: "0.75rem 1rem",
        sm: {
            padding: "0.375rem 0.5rem"
        }
    },
    colorScheme: {
        dark: {
            bodyCell: {
                selectedBorderColor: "{primary.900}"
            },
            root: {
                borderColor: "{surface.800}"
            },
            row: {
                stripedBackground: "{surface.950}"
            }
        },
        light: {
            bodyCell: {
                selectedBorderColor: "{primary.100}"
            },
            root: {
                borderColor: "{content.border.color}"
            },
            row: {
                stripedBackground: "{surface.50}"
            }
        }
    },
    columnFooter: {
        fontWeight: "600"
    },
    columnResizer: {
        width: "0.5rem"
    },
    columnTitle: {
        fontWeight: "600"
    },
    dropPoint: {
        color: "{primary.color}"
    },
    filter: {
        constraint: {
            borderRadius: "{list.option.border.radius}",
            color: "{list.option.color}",
            focusBackground: "{list.option.focus.background}",
            focusColor: "{list.option.focus.color}",
            padding: "{list.option.padding}",
            selectedBackground: "{list.option.selected.background}",
            selectedColor: "{list.option.selected.color}",
            selectedFocusBackground: "{list.option.selected.focus.background}",
            selectedFocusColor: "{list.option.selected.focus.color}",
            separator: {
                borderColor: "{content.border.color}"
            }
        },
        constraintList: {
            gap: "{list.gap}",
            padding: "{list.padding}"
        },
        inlineGap: "0.5rem",
        overlayPopover: {
            background: "{overlay.popover.background}",
            borderColor: "{overlay.popover.border.color}",
            borderRadius: "{overlay.popover.border.radius}",
            color: "{overlay.popover.color}",
            gap: "0.5rem",
            padding: "{overlay.popover.padding}",
            shadow: "{overlay.popover.shadow}"
        },
        overlaySelect: {
            background: "{overlay.select.background}",
            borderColor: "{overlay.select.border.color}",
            borderRadius: "{overlay.select.border.radius}",
            color: "{overlay.select.color}",
            shadow: "{overlay.select.shadow}"
        },
        rule: {
            borderColor: "{content.border.color}"
        }
    },
    footer: {
        background: "{content.background}",
        borderColor: "{datatable.border.color}",
        borderWidth: "0 0 1px 0",
        color: "{content.color}",
        lg: {
            padding: "1rem 1.25rem"
        },
        padding: "0.75rem 1rem",
        sm: {
            padding: "0.375rem 0.5rem"
        }
    },
    footerCell: {
        background: "{content.background}",
        borderColor: "{datatable.border.color}",
        color: "{content.color}",
        lg: {
            padding: "1rem 1.25rem"
        },
        padding: "0.75rem 1rem",
        sm: {
            padding: "0.375rem 0.5rem"
        }
    },
    header: {
        background: "{content.background}",
        borderColor: "{datatable.border.color}",
        borderWidth: "0 0 1px 0",
        color: "{content.color}",
        lg: {
            padding: "1rem 1.25rem"
        },
        padding: "0.75rem 1rem",
        sm: {
            padding: "0.375rem 0.5rem"
        }
    },
    headerCell: {
        background: "{content.background}",
        borderColor: "{datatable.border.color}",
        color: "{content.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "-1px",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        gap: "0.5rem",
        hoverBackground: "{content.hover.background}",
        hoverColor: "{content.hover.color}",
        lg: {
            padding: "1rem 1.25rem"
        },
        padding: "0.75rem 1rem",
        selectedBackground: "{highlight.background}",
        selectedColor: "{highlight.color}",
        sm: {
            padding: "0.375rem 0.5rem"
        }
    },
    loadingIcon: {
        size: "2rem"
    },
    paginatorBottom: {
        borderColor: "{datatable.border.color}",
        borderWidth: "0 0 1px 0"
    },
    paginatorTop: {
        borderColor: "{datatable.border.color}",
        borderWidth: "0 0 1px 0"
    },
    resizeIndicator: {
        color: "{primary.color}",
        width: "1px"
    },
    row: {
        background: "{content.background}",
        color: "{content.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "-1px",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        hoverBackground: "{content.hover.background}",
        hoverColor: "{content.hover.color}",
        selectedBackground: "{highlight.background}",
        selectedColor: "{highlight.color}"
    },
    rowToggleButton: {
        borderRadius: "0.875rem",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}"
        },
        hoverBackground: "{content.hover.background}",
        hoverColor: "{text.color}",
        selectedHoverBackground: "{content.background}",
        selectedHoverColor: "{primary.color}",
        size: "1.75rem"
    },
    sortIcon: {
        color: "{text.muted.color}",
        hoverColor: "{text.hover.muted.color}",
        size: "0.875rem"
    }
} satisfies DataTableDesignTokens;