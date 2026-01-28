import './index.css'

const products = [
  { id: 1, name: "Càmera Retro", price: 299, oldPrice: 349, image: "https://picsum.photos/seed/camera/400/300", badge: "Oferta" },
  { id: 2, name: "Auriculars Pro", price: 199, oldPrice: null, image: "https://picsum.photos/seed/headphones/400/300", badge: null },
  { id: 3, name: "Rellotge Smart", price: 349, oldPrice: null, image: "https://picsum.photos/seed/watch/400/300", badge: "Nou" },
  { id: 4, name: "Altaveu Bluetooth", price: 89, oldPrice: 129, image: "https://picsum.photos/seed/speaker/400/300", badge: "Oferta" },
  { id: 5, name: "Teclat Mecànic", price: 159, oldPrice: null, image: "https://picsum.photos/seed/keyboard/400/300", badge: null },
  { id: 6, name: "Monitor 4K", price: 449, oldPrice: 549, image: "https://picsum.photos/seed/monitor/400/300", badge: "Oferta" },
]

function App() {
  return (
    <div className='px-4 font-main container mx-auto '>
      <header className='flex gap-3 justify-between items-start font-main'>
        <section className='bg-gray-200 size-[40px] rounded-button'>
          <img src="" alt="logo" />
        </section>
        <nav className='flex gap-3 flex-col lg:flex-row'>
          <a href="">link1</a>
          <a href="">link2</a>
          <a href="">link3</a>
          <a href="">link4</a>
        </nav>
        <button className='hidden lg:block'>Registrar</button>
      </header>
      <section className='galeriaProd'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-33 xl:grid-cols-4 py-18'>
          <div className='targeta bg-card rounded-card shadow-card hover:shadow-card-hover hover:bg-light relative transition-all duration-300 w-[150px] p-3'>
            <span className='badge bg-badge aboslute top3-3 right-3 rounded-badge'>Oferta</span>
            <img src="https://picsum.photos/seed/camera/400/300" alt="porducte" className='size-[100px]'/>
            <p className='preu line-through'>19.99</p>
            <button className='shadow-button'>buy</button>
          </div>
        </div>
      </section>
      <footer className='grid sm:grid-cols-1 lg:grid-cols-3  py-18'>
        <section className='bg-gray-200 size-[40px] rounded-button'>
          <img src="" alt="logo" />
        </section>
        <p>asdfasdfasdf</p>
        <p>asdfgetetettt</p>
      </footer>
    </div>
  )
}

export default App
