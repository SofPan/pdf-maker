import { createContext } from 'react';
import './App.css';
import CreatePDF from './components/PDF-Builder/CreatePDF';
import PreviewPane from './components/PreviewPane/PreviewPane';
import { Box } from '@mui/material';
import useCreatedElements from './contexts/useCreatedElements';

export const AppContext = createContext();
function App() {

  const { state, dispatch } = useCreatedElements();
  console.log("app state", state);
  return (
    <Box
      className="App"
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        maxWidth: '85%',
        width: '1440px',
        margin: '0 auto'
      }}
    >
      <AppContext.Provider value={{ state, dispatch }}>
        {/* PDF Builder Component */}
        <CreatePDF />
        {/* Preview Pane Component */}
        <PreviewPane />
      </AppContext.Provider>
    </Box>
  );
}

export default App;
