import * as form from "./form";
import * as button from "./button";
import * as data from "./data";
import * as panel from "./panel";
import * as overlay from "./overlay";
import * as file from "./file";
import * as menu from "./menu";
import * as messages from "./messages";
import * as media from "./media";
import * as misc from "./misc";
import * as chart from "./chart";
import * as utilities from "./utilities";

export { form, button, data, panel, overlay, file, menu, messages, media, misc, chart, utilities };

const components = {
    ...form,
    ...button,
    ...data,
    ...panel,
    ...overlay,
    ...file,
    ...menu,
    ...messages,
    ...media,
    ...misc,
    ...chart,
    ...utilities
};

export default components;
