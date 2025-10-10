import type { InlineMessageDesignTokens } from '@primeuix/themes/types/inlinemessage';

export default {
    root: {
        borderRadius: "{content.border.radius}",
        gap: "0.5rem",
        padding: "{form.field.padding.y} {form.field.padding.x}"
    },
    colorScheme: {
        dark: {
            contrast: {
                background: "{surface.0}",
                borderColor: "{surface.100}",
                color: "{surface.950}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
            },
            error: {
                background: "color-mix(in srgb, {red.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                color: "{red.500}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
            },
            info: {
                background: "color-mix(in srgb, {blue.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                color: "{blue.500}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
            },
            secondary: {
                background: "{surface.800}",
                borderColor: "{surface.700}",
                color: "{surface.300}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
            },
            success: {
                background: "#00837529",
                borderColor: "{teal.700}",
                color: "{teal.300}",
                shadow: "0px 4px 8px 0px #0108040a"
            },
            warn: {
                background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
                borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
                color: "{yellow.500}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
            }
        },
        light: {
            contrast: {
                background: "{surface.900}",
                borderColor: "{surface.950}",
                color: "{surface.50}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
            },
            error: {
                background: "color-mix(in srgb, {red.50}, transparent 5%)",
                borderColor: "{red.200}",
                color: "{red.600}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
            },
            info: {
                background: "color-mix(in srgb, {blue.50}, transparent 5%)",
                borderColor: "{blue.200}",
                color: "{blue.600}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
            },
            secondary: {
                background: "{surface.100}",
                borderColor: "{surface.200}",
                color: "{surface.600}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
            },
            success: {
                background: "#f0fdf4f2",
                borderColor: "{teal.400}",
                color: "{teal.700}",
                shadow: "0px 4px 8px 0px #0108040a"
            },
            warn: {
                background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
                borderColor: "{yellow.200}",
                color: "{yellow.600}",
                shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
            }
        }
    },
    icon: {
        size: "1rem"
    },
    text: {
        fontWeight: "500"
    }
} satisfies InlineMessageDesignTokens;