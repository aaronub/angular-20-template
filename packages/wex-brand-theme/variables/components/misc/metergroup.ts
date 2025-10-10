import type { MeterGroupDesignTokens } from '@primeuix/themes/types/metergroup';

export default {
    root: {
        borderRadius: "{content.border.radius}",
        gap: "1rem"
    },
    label: {
        gap: "0.5rem"
    },
    labelIcon: {
        size: "1rem"
    },
    labelList: {
        horizontalGap: "1rem",
        verticalGap: "0.5rem"
    },
    labelMarker: {
        size: "0.5rem"
    },
    meters: {
        background: "{content.border.color}",
        size: "0.5rem"
    }
} satisfies MeterGroupDesignTokens;