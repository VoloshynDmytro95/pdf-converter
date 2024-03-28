import { ChangeEvent, FC, useState } from "react";

const PdfForm: FC<{ onSubmit: (text: string) => Promise<void> }> = ({ onSubmit }) => {
    const [text, setText] = useState<string>('');

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = async () => {
        await onSubmit(text);
        setText('');
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="text-center">
                <label htmlFor="text" className="block">Enter text for converting</label>
                <input
                    id="text"
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="convert"
                    className="block mx-auto mb-4 px-4 mt-5 py-2 border rounded"
                />
                <button onClick={handleSubmit} className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded">Convert to PDF</button>
            </div>
        </div>

    );
};

export default PdfForm;