// material
import { Box, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Bar from '../components/Bar';
import image from '../images/erin-lindford.jpeg';

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
          <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-red-400  hover:text-white hover:bg-red-700">
            Clear Selections
          </button>
          <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
              src={image}
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">Erin Lindford</p>
                <p className="text-gray-500 font-medium">Product Engineer</p>
              </div>
              <button className="px-4 py-1 text-sm text-black bg-red-400 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
                Message
              </button>
            </div>
          </div>
        </Box>
      </Container>
    </Page>
  );
}
