import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

export const TEXT_BLACK = "#0A090C"
export const BACKGROUND_WHITE = "#F0EDEE"
export const MAIN_COLOR_BLUE = "#07393C"
export const DARK_HIGHLIGHT_BLUE = "#2C666E"
export const LIGHT_HIGHLIGHT_BLUE = "#90DDF0"


const theme = extendTheme({
    styles: {
        global: props => ({
            body: {
            bg: mode('#F0EDEE', '#F0EDEE')(props),
            },
        }),
    },

    fonts: {
        heading: "Helvetica",
        body: "Helvetica",
    },

    colors: {
        brand: {
            100: "#f7fafc",
            900: "#1a202c",
        },
    },
})

export default theme;