import { FC } from 'react';
import Modal from 'react-modal';

interface IPdfModalProps {
    isOpen: boolean;
    pdfUrl: string | null;
    closeModal: () => void;
}

const PdfModal: FC<IPdfModalProps> = ({ isOpen, pdfUrl, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="PDF Modal"
        >
            {pdfUrl && (
                <div>
                    <iframe
                        title="PDF Viewer"
                        src={pdfUrl}
                        style={{ width: '100%', height: '80vh', border: 'none' }}
                    />
                    <button onClick={closeModal} className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded">Close</button>
                </div>
            )}
        </Modal>
    );
};

export default PdfModal;
