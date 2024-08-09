import { CiCirclePlus, CiMenuBurger } from 'react-icons/ci';
import './Sidebar.css'
import { FaClockRotateLeft, FaRegCircleQuestion, FaRegMessage } from 'react-icons/fa6';
import { IoSettings } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { Context } from '../Context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const [onSent,prevPrompts,setRecentPrompt]=useContext(Context)
    return (
        <>
            <div className='sidebar min-h-[770px] min-w-fit inline-flex flex-col justify-between bg-slate-100 p-5 pt-5'>
                <div className='top'>
                    <CiMenuBurger 
                    onClick={()=>setExtended(prev=>!prev)} className="text-2xl" />

                    <div className=''>
                        <div className='inline-flex items-center gap-2 mt-8 p-3 bg-white rounded-[50px] font-light text-gray-600 ' >
                            <CiCirclePlus className="text-xl" />
                            {extended ? <p>New Chat...</p> : null}
                        </div>
                        {extended 
                        ?
                            <div className='mt-5'>
                                <p className='font-semibold transform'>Recent </p>
                                {
                                    prevPrompts.map((item,index)=>{
                                        <div className=' inline-flex gap-2 mt-5 hover:bg-gray-300 py-2 px-2 rounded-[50px]'>
                                        <FaRegMessage className="text-2xl" />
                                        <p>What is React ...</p>
                                    </div>
                                    })
                                }

                               
                            </div>
                            : null
                        }

                    </div>
                </div>
                {/* bottom side */}
                <div className='flex-col px-4'>
                    <div className='flex items-center gap-2 py-4 hover:bg-gray-300 rounded-[50px] '>
                        <FaRegCircleQuestion />
                        {extended ?<p>Help</p>:null}
                    </div>

                    <div className='flex items-center gap-2 hover:bg-gray-300 rounded-[50px] '>
                        <FaClockRotateLeft />
                        {extended ?<p>Activity</p>:null}
                    </div>
                    <div className='flex items-center gap-2 py-4 hover:bg-gray-300 rounded-[50px] '>
                        <IoSettings />
                        {extended ?<p>Settings</p>:null}
                        </div>

                </div>
            </div>
        </>
    );
};

export default Sidebar