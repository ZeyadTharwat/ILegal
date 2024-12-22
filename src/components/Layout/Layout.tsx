import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Header from '../Shared/Header';

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className=' min-h-screen  font-inter relative'>
        <div className={`absolute bg-gradient-bg h-full w-full transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}/>
            <div className={`px-6 py-[52px] w-full h-full flex`}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='w-full'>
        <div className={`relative bg-navy h-full pl-[46px] pr-5 pt-[76px] pb-28 shadow-panel rounded-[35px] ${isOpen ? '' :' ml-4'}`}>
          <Header/>
          <Outlet />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Layout;
