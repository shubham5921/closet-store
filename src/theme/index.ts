
import { createTheme } from '@mui/material/styles';
import { vars } from './variables';

const { themeColor, fontPrimary, colorPrimary, colorBackgroundPrimary, colorSecondary, searchBarBg, searchBarColor } = vars;

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: fontPrimary,
            letterSpacing: 0
        },
        h3: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            letterSpacing: '-0.0313rem',
            fontWeight: 700
        },
        caption: {
            fontSize: '1rem',
            lineHeight: '1.375rem',
            letterSpacing: '-0.0125rem',
            fontWeight: 400,
            color: 'rgb(191, 191, 198)'
        }
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
                body {
                    background: ${colorPrimary};
                    color: ${colorSecondary}
                }
                *, body {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: ${fontPrimary};
                }
                `,
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: colorPrimary,
                    boxShadow: `0 -0.0625rem 0 0 ${colorBackgroundPrimary} inset`
                }
            }
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    background: 'transparent',
                    color: colorSecondary,
                    borderRadius: 0
                },
            }
        },

        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: searchBarBg,
                    '&.Mui-checked': {
                        color: themeColor,
                    }
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'rgba(255, 255, 255, 1)',
                    '&.Mui-disabled': {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                }
            }
        },

        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 0,
                    marginTop: '1rem',

                    '&:last-child': {
                        paddingBottom: 0
                    },

                    '& .MuiTypography-root': {
                        fontSize: '1rem',
                        lineHeight: '1.375rem'
                    },

                    '& .MuiTypography-h5': {
                        fontWeight: 600,
                        color: '#96969F',
                        textTransform: 'uppercase'

                    },

                    '& .MuiTypography-body2': {
                        fontWeight: 400,
                        color: colorSecondary,
                    },
                }
            }
        },

        MuiCardMedia: {
            styleOverrides: {
                root: {
                    borderRadius: '0.625rem'
                }
            }
        },

        MuiToolbar: {
            styleOverrides: {
                root: {
                    justifyContent: "space-between",
                    gap: '2rem'
                }
            }
        },

        MuiFormControlLabel: {
            styleOverrides: {
                label: ({ theme }) => ({
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.875rem'
                    }
                })
            }
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: () => ({
                    color: searchBarColor,
                    borderColor: searchBarBg,
                    backgroundColor: searchBarBg,
                    letterSpacing: 0,
                    borderRadius: '0.375rem',

                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: searchBarBg,
                    },

                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeColor,
                        borderWidth: '0.0625rem',
                    },
                }),

                input: ({ theme }) => ({
                    padding: '0 1.5rem',
                    height: '2.25rem',
                    fontSize: '0.875rem',
                    textOverflow: 'ellipsis',

                    [theme.breakpoints.up('sm')]: {
                        height: '3.5rem',
                        fontSize: '1rem',
                    },
                }),

                notchedOutline: {
                    borderColor: searchBarBg,
                },
            },
        },

    }
});

export default theme;