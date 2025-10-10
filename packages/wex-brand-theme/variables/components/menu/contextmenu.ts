import type { ContextMenuDesignTokens } from '@primeuix/themes/types/contextmenu';

 export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        shadow: "{overlay.navigation.shadow}",
        transitionDuration: "{transition.duration}"
    },
    item: {
        activeBackground: "{navigation.item.active.background}",
        activeColor: "{navigation.item.active.color}",
        borderRadius: "{navigation.item.border.radius}",
        color: "{navigation.item.color}",
        focusBackground: "{navigation.item.focus.background}",
        focusColor: "{navigation.item.focus.color}",
        gap: "{navigation.item.gap}",
        icon: {
            activeColor: "{navigation.item.icon.active.color}",
            color: "{navigation.item.icon.color}",
            focusColor: "{navigation.item.icon.focus.color}"
        },
        padding: "{navigation.item.padding}"
    },
    list: {
        gap: "{navigation.list.gap}",
        padding: "{navigation.list.padding}"
    },
    separator: {
        borderColor: "{content.border.color}"
    },
    submenu: {
        mobileIndent: "1rem"
    },
    submenuIcon: {
        activeColor: "{navigation.submenu.icon.active.color}",
        color: "{navigation.submenu.icon.color}",
        focusColor: "{navigation.submenu.icon.focus.color}",
        size: "{navigation.submenu.icon.size}"
    }
} satisfies ContextMenuDesignTokens;