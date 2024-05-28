import './App.css';
import CreatePDF from './components/PDF-Builder/CreatePDF';
import PreviewPane from './components/PreviewPane/PreviewPane';

function App() {
  return (
    <div className="App">
      {/* PDF Builder Component */}
      <CreatePDF />
      {/* Preview Pane Component */}
      <PreviewPane />
    </div>
  );
}

export default App;
