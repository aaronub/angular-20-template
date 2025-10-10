import type { TimelineDesignTokens } from '@primeuix/themes/types/timeline';

export default {
    event: {
        minHeight: "5rem"
    },
    eventConnector: {
        color: "{content.border.color}",
        size: "2px"
    },
    eventMarker: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "50%",
        borderWidth: "2px",
        content: {
            background: "{primary.color}",
            borderRadius: "50%",
            insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)",
            size: "0.375rem"
        },
        size: "1.125rem"
    },
    horizontal: {
        eventContent: {
            padding: "1rem 0"
        }
    },
    vertical: {
        eventContent: {
            padding: "0 1rem"
        }
    }
} satisfies TimelineDesignTokens;