import type { MenuDesignTokens } from '@primeuix/themes/types/menu';

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
        borderRadius: "{navigation.item.border.radius}",
        color: "{navigation.item.color}",
        focusBackground: "{navigation.item.focus.background}",
        focusColor: "{navigation.item.focus.color}",
        gap: "{navigation.item.gap}",
        icon: {
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
    submenuLabel: {
        background: "{navigation.submenu.label.background}",
        color: "{navigation.submenu.label.color}",
        fontWeight: "{navigation.submenu.label.font.weight}",
        padding: "{navigation.submenu.label.padding}"
    }
} satisfies MenuDesignTokens;