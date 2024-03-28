import { FC } from 'react';
import PdfConverter from './ui/pdf-converter';
import './index.css';

const App: FC = () => {
  return (
    <div className="App">
      <PdfConverter />
    </div>
  );
};

export default App;
