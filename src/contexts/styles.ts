import { LightTheme, DarkTheme } from "@pankod/refine-mui";

export const overridedLightTheme = {
    ...LightTheme,
    palette: {
        ...LightTheme.palette,
        primary: {
            main: "#5864fd",
            contrastText: "#000000",
        },
        secondary: {
            main: "#252246", // sider
            medium: "#2f2b55",
            light: "#45426d",
            pastel: "#a9a5c4",
            bright: "#a49df9",
            contrastText: "#ffffff",
        },
        error: {
            main: '#fe5150',
            contrastText: "#000000",
        },
        warning: {
            main: '#ff8957',
            contrastText: "#000000",
        },
        info: {
            main: '#37ABFF',
            contrastText: "#000000",
        },
        success: {
            main: '#00D876',
            contrastText: "#000000",
        },
        highlight: {
            main: '#faca52',
            contrastText: "#000000",
        },
        neoBright: {
            contrastText: "#000000",

            pink: "#fc7783",
            green: "#abec67",
            yellow: "#fedc16",
            red: "#ff5052",
            purple: "#c39af6",
            blue: "#00def0",
        },
        neoPastel: {
            contrastText: "#000000",

            green: "#43fdad",
            yellow: "#fce192",
            red: "#fea799",
            purple: "#c9bffe",
            blue: "#89e3fd",
        },
        background: {
            default: '#fefefe',
            paper: '#fefefe'
        },
    },
    shadows: {
        0: "none",
        1: "4px 4px 0px #000000",
        2: "4px 4px 0px #5864fd",
        3: "4px 4px 0px #fc7783",
        4: "4px 4px 0px #abec67",
        5: "4px 4px 0px #fedc16",
        6: "4px 4px 0px #ff5052",
        7: "4px 4px 0px #c39af6",
        8: "4px 4px 0px #00def0",
        9: "4px 4px 0px #43fdad",
        10: "4px 4px 0px #fce192",
        11: "4px 4px 0px #fea799",
        12: "4px 4px 0px #c9bffe",
        13: "4px 4px 0px #89e3fd",
    },
    // shape: {
    //     borderRadius: 20
    // },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fefefe',
                    color: '#000000'
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#000000'
                }
            }
        },
    }
};

export const overridedDarkTheme = {
    ...DarkTheme,
    // palette: {
        // ...DarkTheme.palette,
        // PALETTE ONE

        // primary: {
        //     main: "#7180fd",
        //     contrastText: "#ffffff",
        // },
        // secondary: {
        //     main: "#252246", // sider
        //     contrastText: "#ffffff",
        // },
        // error: {
        //     main: '#ff5052',
        //     // main: '#e1434b',
        //     contrastText: "#ffffff",
        // },
        // warning: {
        //     main: '#fcac27',
        //     // main: '#fd6913'
        //     contrastText: "#ffffff",
        // },
        // info: {
        //     main: '#53b5f4',
        //     contrastText: "#ffffff",
        // },
        // success: {
        //     main: '#6dbd45',
        //     contrastText: "#ffffff",
        // },

        // neo: {
        //     contrastText: "#ffffff",
        //     darkColorOne: "#0e1440",
        //     darkColorTwo: "#20a95b",
        //     darkColorThree: "#8b45e9",
        //     darkColorFour: "#0b1415",
        //     darkColorFive: "#0e42f2",
        //     darkColorSix: "#f62e03",
        //     darkColorSeven: "#7180fd",
        //     darkColorEight: "#1785ff",
        //     darkColorNine: "#8144db",
        //     colorOne: "#8d46eb",
        //     colorTwo: "#84b998",
        //     colorThree: "#1d1d1e",
        //     colorFour: "#5b35c7",
        //     colorFive: "#6c8eff",
        //     colorSix: "#6c63fd",
        //     colorSeven: "#2ab3c0",
        //     colorEight: "#4b4d4f",
        //     colorNine: "#00b593",
        //     pastelColorOne: "#4257cb",
        //     pastelColorTwo: "#6e7bfd",
        //     pastelColorThree: "#fda06e",
        //     pastelColorFour: "#5c43d0",
        //     pastelColorFive: "#e5797f",
        //     pastelColorSix: "#ff2d42",
        //     pastelColorSeven: "#f9d502",
        //     pastelColorEight: "#6e6aff",
        //     pastelColorNine: "#edb507",
        //     neonColorOne: "#4a83f9",
        //     neonColorTwo: "#e72f63",
        //     neonColorThree: "#2c9544",
        //     neonColorFour: "#fe4102",
        //     neonColorFive: "#f20261",
        //     neonColorSix: "#33a9fe",
        //     neonColorSeven: "#f3734e",
        //     neonColorEight: "#e1434b",
        //     neonColorNine: "#7180fd",
        // },


        // primary: {
        //     main: "#a3a7f5",
        //     contrastText: "#ffffff",
        // },
        // secondary: {
        //     main: "#121b2a", // sider
        //     contrastText: "#ffffff",
        // },
        // error: {
        //     main: '#fd5553',
        //     contrastText: "#ffffff",
        // },
        // warning: {
        //     main: '#eecc59',
        //     contrastText: "#ffffff",
        // },
        // info: {
        //     main: '#56d3fc',
        //     contrastText: "#ffffff",
        // },
        // success: {
        //     main: '#9EE96E',
        //     contrastText: "#ffffff",
        // },
    //     background: {
    //         default: '#2f2c55',
    //         paper: '#2f2c55'
    //     }
    // },
    palette: {
        ...DarkTheme.palette,
        primary: {
            main: "#5864fd",
            contrastText: "#E4E6EE",
        },
        secondary: {
            main: "#18191A", // sider
            medium: "#242526",
            light: "#3A3B3C",
            pastel: "#a9a5c4",
            bright: "#a49df9",
            contrastText: "#E4E6EE",
        },
        error: {
            main: '#fe5150',
            contrastText: "#E4E6EE",
        },
        warning: {
            main: '#ff8957',
            contrastText: "#E4E6EE",
        },
        info: {
            main: '#37ABFF',
            contrastText: "#E4E6EE",
        },
        success: {
            main: '#00D876',
            contrastText: "#E4E6EE",
        },
        highlight: {
            main: '#faca52',
            contrastText: "#E4E6EE",
        },
        darkMode: {
            dark: "#18191A",
            medium: "#242526",
            light: "#3A3B3C",
            white: "#E4E6EB",
            grey: "#B0B3B8",
            primary: "#5864fd",
            purpleDark: "#1c1c27",
            purpleLight: "#28293e",
            sidebar: "#242146"
        },
        neoBright: {
            contrastText: "#E4E6EE",

            pink: "#fc7783",
            green: "#abec67",
            yellow: "#fedc16",
            red: "#ff5052",
            purple: "#c39af6",
            blue: "#00def0",
        },
        neoPastel: {
            contrastText: "#E4E6EE",

            green: "#43fdad",
            yellow: "#fce192",
            red: "#fea799",
            purple: "#c9bffe",
            blue: "#89e3fd",
        },
        background: {
            default: '#3A3B3C',
            paper: '#3A3B3C'
        },
    },
    shadows: {
        0: "none",
        1: "4px 4px 0px #000000",
        2: "4px 4px 0px #5864fd",
        3: "4px 4px 0px #fc7783",
        4: "4px 4px 0px #abec67",
        5: "4px 4px 0px #fedc16",
        6: "4px 4px 0px #ff5052",
        7: "4px 4px 0px #c39af6",
        8: "4px 4px 0px #00def0",
        9: "4px 4px 0px #43fdad",
        10: "4px 4px 0px #fce192",
        11: "4px 4px 0px #fea799",
        12: "4px 4px 0px #c9bffe",
        13: "4px 4px 0px #89e3fd",
    },
    // shape: {
    //     borderRadius: 20
    // },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#242526',
                    color: '#E4E6EE'
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#E4E6EE'
                }
            }
        },
    }
};