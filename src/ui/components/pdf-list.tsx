import { FC } from 'react';

interface PdfArray {
    name: string;
    url: string;
}

interface PdfListProps {
    pdfFiles: PdfArray[];
    openPdf: (pdfUrl: string) => void;
}

const PdfList: FC<PdfListProps> = ({ pdfFiles, openPdf }) => {
    return (
        <ul>
            {pdfFiles.map((pdfFile, index) => (
                <li key={index} className="bg-gray-100 rounded-lg shadow-md p-4 mb-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300" style={{ marginTop: '10px' }} onClick={() => openPdf(pdfFile.url)}>
                    {pdfFile.name}
                </li>
            ))}
        </ul>
    );
};

export default PdfList;
