import type { PanelMenuDesignTokens } from '@primeuix/themes/types/panelmenu';

export default {
    root: {
        gap: "0.5rem",
        transitionDuration: "{transition.duration}"
    },
    item: {
        borderRadius: "{content.border.radius}",
        color: "{navigation.item.color}",
        focusBackground: "{navigation.item.focus.background}",
        focusColor: "{navigation.item.focus.color}",
        gap: "0.5rem",
        icon: {
            color: "{navigation.item.icon.color}",
            focusColor: "{navigation.item.icon.focus.color}"
        },
        padding: "{navigation.item.padding}"
    },
    panel: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        borderWidth: "1px",
        color: "{content.color}",
        first: {
            borderWidth: "1px",
            topBorderRadius: "{content.border.radius}"
        },
        last: {
            borderWidth: "1px",
            bottomBorderRadius: "{content.border.radius}"
        },
        padding: "0.25rem 0.25rem"
    },
    submenu: {
        indent: "1rem"
    },
    submenuIcon: {
        color: "{navigation.submenu.icon.color}",
        focusColor: "{navigation.submenu.icon.focus.color}"
    }
} satisfies PanelMenuDesignTokens;