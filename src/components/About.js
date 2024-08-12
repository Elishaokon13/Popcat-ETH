import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ImageRowWithSocials from './test';

const AboutSection = () => {
  const initialCount = 1624000;
  const [counter, setCounter] = useState(initialCount);
  const [power, setPower] = useState(1); // Start power from 1 to continue from initial count

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(initialCount + (2 ** 4) * power);
      setPower((prevPower) => prevPower + 1);
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [power]);

  return (
    <>
      <div className="bg-cover mt-2 md:mt-10 bg-center bg-black bg-no-repeat " style={{ backgroundImage: "url('/bg.png')" }}>
        {/* <div className="relative min-h-screen w-full text-white p-8"> */}
          <div className="relative text-center">
            <h1 className="text-3xl sm:text-5xl font-permanentMarker font-bold mb-8">PopCat; Another Cat that pops on ETH</h1>
            <p className="max-w-4xl font-hanaleiFill mx-auto text-lg leading-relaxed">
            Fuel your portfolio with the unstoppable meow-mentum of Popcat! This token is the purr-fect blend of humor and potential. Invest, sit back, and watch your assets pop like never before.

              <br/>Together, we're unstoppable
            </p>
          </div>
        {/* </div> */}
      </div>

    </>
  );
};

export default AboutSection;
