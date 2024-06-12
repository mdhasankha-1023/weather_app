import { FaTemperatureFull } from "react-icons/fa6";

export default function WeatherDetails() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-overlay bg-opacity-60 blur-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='flex flex-col py-20 border-b-2 border-b-slate-50 gap-4'>
                    <h1 className="text-sm uppercase">thunderstorm with light drizzle</h1>
                    
                    {/* first */}
                    <div className='flex gap-4 justify-between'>
                        <h1>Temp max</h1>
                        <div className="flex items-center justify-center gap-2">
                            <p>19 &deg;</p>
                            <span><FaTemperatureFull /></span>
                        </div>
                    </div>

                    {/* second */}
                    <div className='flex gap-4 justify-between'>
                        <h1>Temp min</h1>
                        <div className="flex items-center justify-center gap-2">
                            <p>19 &deg;</p>
                            <span><FaTemperatureFull /></span>
                        </div>
                    </div>

                    {/* third */}
                    <div className='flex gap-4 justify-between'>
                        <h1>Humidity</h1>
                        <div className="flex items-center justify-center gap-2">
                            <p>38%</p>
                            <span><FaTemperatureFull /></span>
                        </div>
                    </div>

                    {/* fourth */}
                    <div className='flex gap-4 justify-between'>
                        <h1>Cloudy</h1>
                        <div className="flex items-center justify-center gap-2">
                            <p>56%</p>
                            <span><FaTemperatureFull /></span>
                        </div>
                    </div>

                    {/* fifth */}
                    <div className='flex gap-4 justify-between'>
                        <h1>Wind</h1>
                        <div className="flex items-center justify-center gap-2">
                            <p>5km/h</p>
                            <span><FaTemperatureFull /></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
