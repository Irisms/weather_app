import axios from 'axios'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Weather from './components/Weather'
import weatherpic from './weather.jpg'


export default function Home() {

  const[city, setCity] = useState('')
  const[weather, setWeather] = useState({})
  const[loading, setLoading] = useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`


  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      // console.log(response.data)
    })
    setCity('')
    setLoading(false)
  }

  return(
    <div>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/100 z-[1]">
        <img 
        src={weatherpic}
        // 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        alt='weather'
        className='object-contain'
        /> 
      </div>

       

      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border-gray-300 text-white rounded-2xl">
          <div>
            <input 
            onChange={(e) => setCity(e.target.value)}
            className='bg-transparent border-none text-white focus:outline-none text-2xl' type='text' placeholder='Search city' />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>

        </form>
      </div>

      {/* Weather */}
      {weather.main && <Weather data={weather}/> }
      
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <div className='absolute pt-3 bg-black text-white'>colors</div>
//     </div>
//   );
// }

// export default App;
