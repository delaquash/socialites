import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        pallete: {
        primary : {
            dark: string;
            main: string;
            light: string;
        },
        neutral : {
            dark: string;
            main: string;
            light: string;
            mediumMain : string;
            medium: string;
        },
        background: {
            default: string;
            alt: string;
        }
        };
  }
//   // allow configuration using `createTheme`
//   interface CustomThemeOptions extends ThemeOptions {
//     pallete?: {
//       primary?: {
//         dark: string;
//         main: string;
//         light: string;
//       },
//       neutral?: {
//         dark: string;
//         main: string;
//         light: string;
//         mediumMain : string;
//         medium: string;
//       },
//       background?: {
//         default: string;
//         alt: string;
//       }
//     };
//   }
//   export function createTheme(options?: CustomThemeOptions): CustomTheme;
}