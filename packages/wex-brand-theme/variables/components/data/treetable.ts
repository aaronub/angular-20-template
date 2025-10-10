import type { TreeTableDesignTokens } from '@primeuix/themes/types/treetable';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    bodyCell: {
        borderColor: "{treetable.border.color}",
        gap: "0.5rem",
        padding: "0.75rem 1rem"
    },
    colorScheme: {
        dark: {
            bodyCell: {
                selectedBorderColor: "{primary.900}"
            },
            root: {
                borderColor: "{surface.800}"
            }
        },
        light: {
            bodyCell: {
                selectedBorderColor: "{primary.100}"
            },
            root: {
                borderColor: "{content.border.color}"
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
    footer: {
        background: "{content.background}",
        borderColor: "{treetable.border.color}",
        borderWidth: "0 0 1px 0",
        color: "{content.color}",
        padding: "0.75rem 1rem"
    },
    footerCell: {
        background: "{content.background}",
        borderColor: "{treetable.border.color}",
        color: "{content.color}",
        padding: "0.75rem 1rem"
    },
    header: {
        background: "{content.background}",
        borderColor: "{treetable.border.color}",
        borderWidth: "0 0 1px 0",
        color: "{content.color}",
        padding: "0.75rem 1rem"
    },
    headerCell: {
        background: "{content.background}",
        borderColor: "{treetable.border.color}",
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
        padding: "0.75rem 1rem",
        selectedBackground: "{highlight.background}",
        selectedColor: "{highlight.color}"
    },
    loadingIcon: {
        size: "2rem"
    },
    nodeToggleButton: {
        borderRadius: "50%",
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
    paginatorBottom: {
        borderColor: "{content.border.color}",
        borderWidth: "0 0 1px 0"
    },
    paginatorTop: {
        borderColor: "{content.border.color}",
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
    sortIcon: {
        color: "{text.muted.color}",
        hoverColor: "{text.hover.muted.color}",
        size: "0.875rem"
    }
} satisfies TreeTableDesignTokens;