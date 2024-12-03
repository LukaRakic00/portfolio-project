import { FiDownload } from 'react-icons/fi';
import Button from './Button'; // Importuj Button komponentu

type DownloadButtonProps = {
    className?: string; // Omogućavanje className kao props
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ className }) => {
    const handleDownload = () => {
        // Kreiraj link za preuzimanje fajla
        const link = document.createElement('a');
        link.href = '/CVLukaRakic.pdf'; // Putanja do fajla
        link.download = 'CVLukaRakic.pdf'; // Naziv fajla
        link.click(); // Pokreni preuzimanje
    };

    return (
        <Button
            onClick={handleDownload}
            className={`flex items-center justify-center ${className}`} // Prosledi klasu
        >
            <FiDownload className="mr-2 text-xl" />
            Download CV
        </Button>
    );
};

export default DownloadButton;
