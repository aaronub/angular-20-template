import type { AvatarDesignTokens } from '@primeuix/themes/types/avatar';

 export default {
    root: {
        background: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        fontSize: "1rem",
        height: "2rem",
        width: "2rem"
    },
    group: {
        borderColor: "{content.background}",
        offset: "-0.75rem"
    },
    icon: {
        size: "1rem"
    },
    lg: {
        fontSize: "1.5rem",
        group: {
            offset: "-1rem"
        },
        height: "3rem",
        icon: {
            size: "1.5rem"
        },
        width: "3rem"
    },
    xl: {
        fontSize: "2rem",
        group: {
            offset: "-1.5rem"
        },
        height: "4rem",
        icon: {
            size: "2rem"
        },
        width: "4rem"
    }
} satisfies AvatarDesignTokens;