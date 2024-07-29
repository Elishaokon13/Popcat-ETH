import React from 'react';
import Image from 'next/image';

const StatsCard = ({ figure, description }) => (
    <div className="flex flex-col items-center text-white p-2 md:p-4 rounded shadow-md w-24 md:w-48">
        <span className="text-xl md:text-3xl font-bold">{figure}</span>
        <span className="text-xs md:text-lg text-center">{description}</span>
    </div>
);

const TokenomicsSection = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText('TBD');
        alert('Text copied to clipboard!');
    };

    return (
        <>
            <div className="bg-cover bg-center animate-pulse bg-black bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
                <div className="relative flex font-permanentMarker  flex-col items-center justify-center min-h-screen  text-white p-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-28 font-permanentMarker">Tokenomics</h1>

                    <div className="relative flex items-center justify-center w-full mb-8">
                        <div className="relative w-48 h-48 md:w-96 md:h-96 bg-gray-800 rounded-lg shadow-lg">
                            <Image src="/cat.PNG" alt="Center Image" layout="fill" objectFit="cover" className="rounded-lg" />

                            {/* Top Left Card */}
                            <div className="absolute top-0 text-black left-0  transform -translate-y-1/2 -translate-x-1/2">
                                <StatsCard figure="100 Million" description="Supply" />
                            </div>

                            {/* Top Right Card */}
                            <div className="absolute top-0 text-black right-0  transform -translate-y-1/2 translate-x-1/2">
                                <StatsCard figure="5/5" description="Tax" />
                            </div>

                            {/* Bottom Left Card */}
                            <div className="absolute bottom-0 text-black  left-0 transform translate-y-1/2 -translate-x-1/2">
                                <StatsCard figure="100%" description="LP Locked" />
                            </div>

                            {/* Bottom Right Card */}
                            <div className="absolute bottom-0 text-black right-0 transform translate-y-1/2 translate-x-1/2">
                                <StatsCard figure="Ownership" description="Renounced" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 p-2 flex flex-col md:flex-row items-center justify-between font-hanaleiFill bg-white text-black rounded text-sm md:text-2xl font-bold w-full max-w-3xl">
                        <span className="text-center md:text-left">CA: </span>
                        {/* <button
                            onClick={handleCopy}
                            className="mt-4 md:mt-0 md:ml-4 px-4 py-2 font-hanaleiFill text-white bg-black rounded font-bold hover:bg-gray-300 hover:text-white transition-colors duration-300"
                        >
                            Copy
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TokenomicsSection;
