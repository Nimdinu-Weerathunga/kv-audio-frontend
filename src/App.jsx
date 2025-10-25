import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
   <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Tailwind CSS Works 🎉
      </h1>

      <ProductCard 
        price="$ 99.99" 
        name="JBL Audio mini 03" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
        imagURL="https://shop.switch.com.my/cdn/shop/files/JBLFlip6.002.jpg?v=1732693514&width=823"
      />

      <ProductCard 
        price="$149.99" 
        name="Retro Mini Game Console" 
        description="Portable retro gaming console with 500+ built-in classic games. Compact design, plug-and-play, perfect for travel or nostalgia gaming." 
        imagURL="https://image.made-in-china.com/2f0j00EcfbkJwMSmqD/Mini-Consola-Retro-Juegos-64G-Built-in-10000-Games-WiFi-Linux-Handheld-Player-Video-Game-Console-RGB20s-with-IPS-Screen.webp"
      />
    </div>
  )
}

export default App

// website: https://kv-audio-frontend.vercel.app/
