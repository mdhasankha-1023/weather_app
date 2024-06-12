import Header from './Components/Header/Header';
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';
import cold from './assets/weather_pictures/cold.jpg'



function App() {

  return (
    <>
    <Header/>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${cold})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content w-full">

          {/* right-side */}
          <div className='w-3/5'></div>

          {/* left-side */}
          <div className='w-2/5 h-screen'>
          <WeatherDetails/>
          </div>
         
        </div>
      </div>

    </>

  )

}

export default App
