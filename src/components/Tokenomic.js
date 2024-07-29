import Image from 'next/image';
import React from 'react';

const ImageCard = ({ src, alt }) => (
  <div className="shadow-lg overflow-hidden">
    <Image src={src} alt={alt} width={300} height={400} className="object-cover w-full h-full" />
  </div>
);

const Tokenomix = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-black bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="text-center mb-8 text-white">
            <h1 className="text-4xl font-permanentMarker font-bold mb-4">Meet the Blaqs</h1>
            <p className="text-lg font-hanaleiFill">the first Blaq: the legendary NastyBlaq!<br /><br /> He&apos;s a trailblazer and comedian known for his hilarious social media skits that have captured the hearts of millions.<br /><br /> He&apos;s the first piece of the BLAQ puzzle and his endorsement is about to send the token soaring!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-[720px]">
            <ImageCard
              src="/R1.png"
              alt="Team Member 1"
            />
            <ImageCard
              src="/R2.png"
              alt="Team Member 2"
            />
            <ImageCard
              src="/R3.png"
              alt="Team Member 3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomix;
