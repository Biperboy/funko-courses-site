export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Funko Courses</h3>
            <p className="text-gray-400">
              Plataforma educativa especializada en cursos sobre colecciones Funko Pop y figuras coleccionables.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-funko transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-funko transition">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-funko transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4 items-start">
              <a
                href="https://www.tiktok.com/@funkosporcelana1?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-funko transition"
                title="Funko Porcelana en TikTok"
              >
                🎥
              </a>
              <span className="text-gray-500">@funkosporcelana1</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <a
                href="https://hotm.io/DSHfBQ4q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
              >
                🛍️ Comprar Ahora
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-gray-400">
              &copy; 2026 Funko Courses. Todos los derechos reservados. | 
              <a 
                href="https://www.tiktok.com/@funkosporcelana1?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-funko hover:underline ml-2"
              >
                Síguenos en TikTok
              </a>
            </p>
            <a
              href="https://hotm.io/DSHfBQ4q"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              🛍️ Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
