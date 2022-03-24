// motor
import { ThemeProvider, defaultTheme } from '@motor-js/theme';
// routes
import Router from './routes';
// theme
import MaterialThemeProvider from './theme';
import ThemeColorPresets from './components/ThemeColorPresets';
// components
import ScrollToTop from './components/ScrollToTop';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <MaterialThemeProvider>
      <ThemeColorPresets>
        <ThemeProvider theme={defaultTheme}>
          <MotionLazyContainer>
            <ScrollToTop />
            <Router />
          </MotionLazyContainer>
        </ThemeProvider>
      </ThemeColorPresets>
    </MaterialThemeProvider>
  );
}
