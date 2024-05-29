import { Box, Button } from '@mui/material';
import './App.css';
import CreatePDF from './components/PDF-Builder/CreatePDF';
import PreviewPane from './components/PreviewPane/PreviewPane';

function App() {
  return (
    <Box
      className="App"
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
    >
      {/* PDF Builder Component */}
      <CreatePDF />
      {/* Preview Pane Component */}
      <PreviewPane />
    </Box>
  );
}

export default App;
