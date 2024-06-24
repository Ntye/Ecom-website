import React from 'react';
import { FaList } from 'react-icons/fa';

const Transaction = ({ transactions }) => {
  return (
    <div className='bg-white  mx-auto my-7 p-4 rounded-lg shadow-lg'>
      <p className='text-lg text-primary text-xl  justify-center items-center font-bold mb-2'>Dernières Activités</p>
      <ul className='space-y-3'>
        {
          transactions.map((trans, index) => (
            <li key={index} className='flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='flex items-center space-x-3'>
                <img src={trans.photo} alt="" className='rounded-full h-8 w-[250px] object-cover' />
                <div>
                  <h1 className='text-sm font-medium'>{trans.nom}</h1>
                  <p className='text-gray-500 text-xs'>{trans.dateDeTransaction}</p>
                </div>
              </div>
              <div className='flex items-center space-x-6'>
                <p className={trans.argentReçu !== 0 ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
                  {trans.argentReçu !== 0 ? `+${trans.argentReçu}` : `-${trans.argentEnvoyé}`}
                </p>
                <FaList className='text-blue-500' />
              </div>
            </li>
          ))
        }
      </ul>
      <a href="#" className="block text-center mt-2 text-blue-600 hover:underline">
        Afficher Toutes Les Transactions
      </a>
    </div>
  );
}

export default Transaction;
