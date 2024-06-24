import React from 'react';
import { FaDownload, FaShoppingCart, FaMoneyCheckAlt } from 'react-icons/fa';
import { CiBank } from "react-icons/ci";
import { SiBitcoincash } from "react-icons/si";
import { FaQrcode } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import Transaction from "./Transaction";
import { transactions } from './Data';


const Hero = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen flex flex-col lg:flex-row gap-8">
      {/* Left side content */}
      <div className="flex-1 space-y-8">
        {/* Top banner */}
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <FaDownload className="text-green-700 text-2xl mr-3" />
            <div>
              <p className="text-lg font-semibold">Téléchargez l'application Gloswitch</p>
              <p className="text-gray-600">Faites-en plus avec Gloswitch.</p>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
          <div className="flex items-center">
              
              <h2 className='text-5xl justify-center items-center h-full font-[700]'>SOLDE </h2>
            
          </div>
          <div>
          <div className="flex flex-row-reverse justify-between p-4  shadow-sm">
            
            <FaList className="ml-2 text-white-500" />
          </div>
            <button className="bg-primary mt-20 text-white px-6 py-3 w-108px inset-x-0 bottom-0  rounded-2xl  ">Transfer Money</button>
          </div>
            
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <Transaction transactions={transactions}/>
            
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className="lg:w-1/2  p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className='flex justify-evenly inset-x-0 bottom-0 '>
            <div>
                <button className="bg-primary text-white px-6 py-3 w-108px inset-x-0 bottom-0  rounded-2xl  ">SEND</button>
            </div>
            <div> <button className="bg-primary text-white px-6 py-3 w-108px  inset-x-0 bottom-0  rounded-2xl">REQUEST</button> </div>
            
        </div>
        <div className='flex'>
          <div className='w-1/3 mt-4 '>
              
              <div className='bg-tertiary p-3 mt-14 rounded-full inline-block'>
                 <SiBitcoincash className="text-green-900 text-2xl" />
                  Cash out
            
              </div>
              <div className='bg-tertiary p-3 mt-3 rounded-full inline-block'>
                 <CiBank className="text-green-900 text-2xl" />
                  Add Bank card and Mobile
            
              </div>
              <div className='bg-tertiary p-3 mt-3 rounded-full inline-block'>
                 <FaQrcode className="text-green-900 text-2xl" />
                  Get paid with QR code
            
              </div>

          </div>
          <div className='w-2/3 mt-10'>
              
  
            Hello
          </div>





        </div>
        <div className='bg-green-100 p-3 rounded-full inline-block mt-14'>
          <h2 className="text-2xl font-semibold mb-2">Banks and Accounts</h2>
          
        </div>
        <div>
        <ul class="list-disc list-inside space-y-3">
            <li class="text-primary">Bank Account</li>
            <li class="text-primary">Credit Card</li>
            <li class="text-primary">Orange Money</li>
            <li class="text-primary">Mobile Money</li>
        </ul>
        </div>
               
      </div>
      
    </div>
  );
}

export default Hero;
