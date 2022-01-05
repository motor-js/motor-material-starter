// material
import { Box, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Bar from '../components/Bar';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Motor Material Starter">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          <Bar />
        </Box>
      </Container>
    </Page>
  );
}
