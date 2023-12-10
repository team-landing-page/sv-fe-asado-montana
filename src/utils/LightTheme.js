import { createMuiTheme } from '@mui/material/styles';

export const theme = createMuiTheme({
    palette: {
        primary: { 
          main: '#F5A218',
          contrastText: '#fff',
        },
        secondary: { 
          main: '#030305',
          contrastText: '#fff',
        },
        error: { 
            main: '#E61B1F',
            contrastText: '#fff',
          },
        warning: { 
          main: '#69BE28',
          contrastText: '#fff',
        },
        info: { 
            main: '#69BE28',
            contrastText: '#fff',
          },
        success: { 
            main: '#69BE28',
            contrastText: '#fff',
          },
    },
});