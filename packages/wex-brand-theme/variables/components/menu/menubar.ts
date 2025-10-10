import type { MenubarDesignTokens } from '@primeuix/themes/types/menubar';

export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        gap: "0.5rem",
        padding: "0.5rem 0.75rem",
        transitionDuration: "{transition.duration}"
    },
    baseItem: {
        borderRadius: "{content.border.radius}",
        padding: "{navigation.item.padding}"
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
    mobileButton: {
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
        hoverColor: "{text.hover.muted.color}",
        size: "1.75rem"
    },
    separator: {
        borderColor: "{content.border.color}"
    },
    submenu: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        gap: "{navigation.list.gap}",
        icon: {
            activeColor: "{navigation.submenu.icon.active.color}",
            color: "{navigation.submenu.icon.color}",
            focusColor: "{navigation.submenu.icon.focus.color}",
            size: "{navigation.submenu.icon.size}"
        },
        mobileIndent: "1rem",
        padding: "{navigation.list.padding}",
        shadow: "{overlay.navigation.shadow}"
    }
} satisfies MenubarDesignTokens;