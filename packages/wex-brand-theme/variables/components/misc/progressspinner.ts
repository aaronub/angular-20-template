import type { ProgressSpinnerDesignTokens } from '@primeuix/themes/types/progressspinner';

export default {
    colorScheme: {
        dark: {
            root: {
                colorFour: "{yellow.400}",
                colorOne: "{red.400}",
                colorThree: "{teal.400}",
                colorTwo: "{blue.400}"
            }
        },
        light: {
            root: {
                colorFour: "{yellow.500}",
                colorOne: "{red.500}",
                colorThree: "{teal.500}",
                colorTwo: "{blue.500}"
            }
        }
    }
} satisfies ProgressSpinnerDesignTokens;