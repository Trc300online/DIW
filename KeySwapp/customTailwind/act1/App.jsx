import './index.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-fons rounded-lg shadow-2xl">
        <img src="" alt="" className="place-self-center bg-gray-500 rounded-full size-[60px]"/>
        <div className="flex flex-col w-90 place-items-center">
          <p className="font-titol xl:text-marca 2xl:text-text-clar">Toni Riera Colomar</p>
          <p className="text-accent">director executiu</p>
          <p className="font-titol text-text-clar">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.</p> 
          <button className="bg-fons text-accent mt-15">hola</button>
          <button className="bg-text-clar text-marca">adeu</button>
        </div>
      </div>
    </div>
  )
}

export default App

