import React,{useState,useEffect}  from 'react'
import bgHome1 from "../images/Background/home_1.jpg"
import bgHome2 from "../images/Background/home_2.jpg"
import bgHome3 from "../images/Background/home_3.jpg"
import { Link } from "react-router-dom";

const wallpaper = [{img:bgHome1,id:0},
                  {img:bgHome2,id:1},
                  {img:bgHome3,id:2}]

function Home() {

    const [currentCount, setCount] = useState(1);

  useEffect(() => {
    console.log(`initializing interval`);
    const interval = setInterval(() => {
      setCount(currentCount+1)
    }, 5000);
    if(currentCount>wallpaper.length-1){
      setCount(0)
    }
    return () => {
      
      clearInterval(interval);

    };
  }, [currentCount])

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        {wallpaper.map((e)=>{
            return <img src={e.img} key={e.id} className="w-full h-full absolute -z-10 object-cover duration-1000" style={e.id===currentCount ? {position:"absolute" ,top:0,opacity:1}:{opacity:0}}/>;
        })}
        <div className='absolute z-10 bg-black w-full h-full bg-opacity-60'>
        </div>
        <div className='text-white z-20 mb-5'>
            <div className='text-7xl mb-3 font-medium'>SIGDES DOUDO</div>
            <div className='text-xl italic font-light'>Sistem Informasi Geospasial Desa Doudo</div>
        </div>
        <div className='z-20'>
            <Link to={"/dashboard"}>
                <div className='bg-white hover:bg-gray-300 cursor-pointer py-4 px-8 rounded-md font-medium'>
                    Masuk SIGDES
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Home