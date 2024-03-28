In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project Structure:

1. **App**:
   - Main component that shows everything.
   - It has only one child component - `<PdfConverter />`.
2. **PdfConverter**:
   - Converts text to PDF and displays a list of them.
   - Includes a form for entering text, a list of generated PDFs, and a modal window for viewing them.
3. **PdfForm**:
   - Simple form for entering text.
   - Users can input text, press a button, and get a PDF.
4. **PdfList**:
   - Simple list of generated PDF files.
   - Users can select a PDF for viewing.
5. **PdfModal**:
   - Modal window for convenient viewing of the selected PDF file.

## Main Project Modules:

1. **React**:
   - Library for building user interfaces.
2. **react-modal**:
   - Component for creating modal windows in React.
