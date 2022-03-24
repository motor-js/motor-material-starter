// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
import ThemeColorPresets from './components/ThemeColorPresets';
// components
import ScrollToTop from './components/ScrollToTop';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ThemeColorPresets>
        <MotionLazyContainer>
          <ScrollToTop />
          <Router />
        </MotionLazyContainer>
      </ThemeColorPresets>
    </ThemeProvider>
  );
}
