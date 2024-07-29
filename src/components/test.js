import Image from 'next/image';
import React from 'react';

const ImageRowWithSocials = () => {
    return (
        <div className="bg-cover bg-center pt-20 bg-black bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Image and Socials */}
                    <div className="text-center">
                        <Image src="/nasboy.png" alt="Image 1" width={250} height={250} className="mx-auto" />
                        <button class="inline-flex items-center px-4 py-2 mt-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-white hover:bg-[#55321b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <div class="flex items-center space-x-2">
                                <img src="/twitter.png" alt="Social Logo" class="h-6 w-6" />
                                <span>Follow Nasboi</span>
                            </div>
                        </button>

                    </div>

                    {/* Second Image and Socials */}
                    <div className="text-center">
                        <Image src="/nastyblaq.png" alt="Image 2" width={250} height={250} className="mx-auto" />
                        <button class="inline-flex items-center px-4 py-2 mt-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-white hover:bg-[#55321b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <div class="flex items-center space-x-2">
                                <img src="/twitter.png" alt="Social Logo" class="h-6 w-6" />
                                <span>Follow NastyBlaq</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageRowWithSocials;
