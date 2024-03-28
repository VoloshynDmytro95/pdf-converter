import { FC, useState } from 'react';
import PdfModal from './components/pdf-modal';
import PdfList from './components/pdf-list';
import { generatePdf } from '../api/apiService';
import PdfForm from './components/pdf-form';


const PdfConverter: FC = () => {
    const [pdfFiles, setPdfFiles] = useState<{ name: string; url: string }[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalPdfUrl, setModalPdfUrl] = useState<string | null>(null);

    const handlePdfGeneration = async (text: string) => {
        try {
            const pdfData = await generatePdf(text);
            const blob = new Blob([pdfData], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(blob);
            setPdfFiles([...pdfFiles, { name: `PDF ${pdfFiles.length + 1}`, url: pdfUrl }]);
            setModalPdfUrl(pdfUrl);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalPdfUrl(null);
    };

    const openPdf = (pdfUrl: string) => {
        setModalPdfUrl(pdfUrl);
        setIsModalOpen(true);
    };

    return (
        <div>
            <PdfForm onSubmit={handlePdfGeneration} />
            <PdfList pdfFiles={pdfFiles} openPdf={openPdf} />
            <PdfModal isOpen={isModalOpen} pdfUrl={modalPdfUrl} closeModal={closeModal} />
        </div>
    );
};

export default PdfConverter;
