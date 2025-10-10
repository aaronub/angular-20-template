import type { EditorDesignTokens } from '@primeuix/themes/types/editor';

 export default {
    content: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}"
    },
    overlay: {
        background: "{overlay.select.background}",
        borderColor: "{overlay.select.border.color}",
        borderRadius: "{overlay.select.border.radius}",
        color: "{overlay.select.color}",
        padding: "{list.padding}",
        shadow: "{overlay.select.shadow}"
    },
    overlayOption: {
        borderRadius: "{list.option.border.radius}",
        color: "{list.option.color}",
        focusBackground: "{list.option.focus.background}",
        focusColor: "{list.option.focus.color}",
        padding: "{list.option.padding}"
    },
    toolbar: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}"
    },
    toolbarItem: {
        activeColor: "{primary.color}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}"
    }
} satisfies EditorDesignTokens;