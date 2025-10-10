import type { TabViewDesignTokens } from '@primeuix/themes/types/tabview';

export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    colorScheme: {
        dark: {
            navButton: {
                shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
            }
        },
        light: {
            navButton: {
                shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
            }
        }
    },
    navButton: {
        background: "{content.background}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}"
    },
    tab: {
        activeBorderColor: "{primary.color}",
        activeColor: "{primary.color}",
        borderColor: "{content.border.color}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}"
    },
    tabList: {
        background: "{content.background}",
        borderColor: "{content.border.color}"
    },
    tabPanel: {
        background: "{content.background}",
        color: "{content.color}"
    }
} satisfies TabViewDesignTokens;