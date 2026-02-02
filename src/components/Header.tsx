export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-funko">
          🎁 Funko Courses
        </div>
        <div className="flex gap-6 items-center">
          <a href="/" className="text-gray-700 hover:text-funko font-medium">
            Inicio
          </a>
          <a href="#cursos" className="text-gray-700 hover:text-funko font-medium">
            Cursos
          </a>
          <a href="#contacto" className="text-gray-700 hover:text-funko font-medium">
            Contacto
          </a>
          <a 
            href="https://www.tiktok.com/@funkosporcelana1?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-funko font-medium flex items-center gap-2"
            title="Síguenos en TikTok"
          >
            <span>🎥</span> TikTok
          </a>
          <a 
            href="https://hotm.io/DSHfBQ4q"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-funko to-red-700 text-white px-4 py-2 rounded-lg hover:opacity-90 font-semibold transition"
            title="Comprar Ahora"
          >
            🛍️ Comprar
          </a>
        </div>
      </nav>
    </header>
  )
}
