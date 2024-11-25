import React from 'react';

interface LoaderProps {
    size: number;
    white?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ size, white = false }) => {
    const spinnerStyle = {
        width: size,
        height: size,
        border: `4px solid ${white ? '#fff' : '#000'}`,
        borderTop: `4px solid transparent`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    };

    return <div style={spinnerStyle}></div>;
};

export default Loader;
