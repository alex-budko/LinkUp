import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';


const theme = extendTheme({

    styles: {
        global: props => ({
            body: {
            bg: mode('orange.100', 'orange.100')(props),
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