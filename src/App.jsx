import Header from './Components/Header/Header';
import cold from './assets/weather_pictures/cold.jpg'
import { FaTemperatureFull } from "react-icons/fa6";



function App() {

  return (
    <>
    <Header/>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${cold})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content w-full">
          <div className='w-3/5'></div>
          <div className='w-2/5 h-screen'>
            <div className="hero min-h-screen">
              <div className="hero-overlay bg-opacity-60 blur-lg"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  
                  <div className='flex flex-col py-20 border-b-2 border-b-slate-50'>
                    <h1>thunderstorm with light drizzle</h1>
                    <div className='flex gap-4'>
                      <h1>Temp</h1>
                      <p>djkd <span><FaTemperatureFull /></span></p>
                    </div>
                    <div className='flex gap-4'>
                      <h1>Temp</h1>
                      <p>djkd <span><FaTemperatureFull /></span></p>
                    </div>
                    <div className='flex gap-4'>
                      <h1>Temp</h1>
                      <p>djkd</p>
                    </div>
                    <div className='flex gap-4'>
                      <h1>Temp</h1>
                      <p>djkd</p>
                    </div>
                  </div>
                  <div>
                    djfdjfdjkfdj
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )

}

export default App
