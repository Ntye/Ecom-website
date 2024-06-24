import React from 'react';
import Logo from '../../assets/logo2.jpg';
import { FaBell, FaCog } from 'react-icons/fa'; // Import icons

const Menu = [
    {
      id: 1,
      name: "Accueil", // Changed to Accueil to match the provided image
      link: "/",
    },
    {
      id: 2,
      name: "Envoyer",
      link: "/#",
    },
    {
      id: 3,
      name: "Portefeuille", // Changed to Portefeuille to match the provided image
      link: "/#",
    },
    {
      id: 4, // Corrected id
      name: "Activité",
      link: "/#",
    },
    {
      id: 5, // Corrected id
      name: "Aide",
      link: "/#",
    },
];

const NavBar = () => {
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white  duration-200 relative z-40">
            <div className="bg-primary py-2 h-24">
                <div className="container flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <a href="#" className='font-bold text-white text-2xl sm:text-3xl flex items-center gap-4 hover:text-tertiary duration-200'>
                            <img src={Logo} alt="Logo" className="w-20" />
                            Gloswitch
                        </a>
                    </div>
                    
                    <ul className="flex items-center text-white gap-8 text-lg">
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <a
                                    href={data.link}
                                    className="inline-block px-4 py-2 hover:bg-tertiary hover:bg-opacity-20 hover:rounded-full transition-all duration-300"
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}

                    </ul>
                    
                    <div className="flex items-center gap-6">
                        <FaBell className="text-gray-500 text-tertiary cursor-pointer text-xl"/>
                        <FaCog className="text-gray-500 text-tertiary cursor-pointer text-xl"/>
                        <button className=" text-white-500 text-white duration-200">
                            DÉCONNEXION
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
