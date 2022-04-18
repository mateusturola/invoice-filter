import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Cards from '../Components/CardInvoices';
import Header from '../Components/Header';

function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${300}px)` } }}
      >
        <Toolbar />
        <Cards />
      </Box>
    </Box>
  );
}

export default Home;
