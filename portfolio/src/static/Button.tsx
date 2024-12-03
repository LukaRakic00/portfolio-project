// components/ui/Button.tsx
import React from "react";

type ButtonProps = {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode; // Allow children (button label, icon, etc.)
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
