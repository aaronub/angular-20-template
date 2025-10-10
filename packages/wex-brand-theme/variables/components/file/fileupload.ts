import type { FileUploadDesignTokens } from '@primeuix/themes/types/fileupload';

 export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        transitionDuration: "{transition.duration}"
    },
    basic: {
        gap: "0.5rem"
    },
    content: {
        gap: "1rem",
        highlightBorderColor: "{primary.color}",
        padding: "0 1.125rem 1.125rem 1.125rem"
    },
    file: {
        borderColor: "{content.border.color}",
        gap: "1rem",
        info: {
            gap: "0.5rem"
        },
        padding: "1rem"
    },
    fileList: {
        gap: "0.5rem"
    },
    header: {
        background: "#00000000",
        borderColor: "#00000000",
        borderRadius: "0",
        borderWidth: "0",
        color: "{text.color}",
        gap: "0.5rem",
        padding: "1.125rem"
    },
    progressbar: {
        height: "0.25rem"
    }
} satisfies FileUploadDesignTokens;