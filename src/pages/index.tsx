import Head from 'next/head'
import Header from '@/src/components/Header'
import CourseCard from '@/src/components/CourseCard'
import Footer from '@/src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Funko Courses - Cursos de Colecciones Funko | @funkosporcelana1</title>
        <meta name="description" content="Plataforma educativa especializada en figuras coleccionables Funko. Sigue a @funkosporcelana1 en TikTok" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Bienvenido a Funko Courses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Aprende todo sobre colecciones Funko con nuestros cursos especializados
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-funko text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Explorar Cursos
            </button>
            <a 
              href="https://hotm.io/DSHfBQ4q"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
            >
              🛍️ Comprar Ahora
            </a>
            <a 
              href="https://www.tiktok.com/@funkosporcelana1?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
            >
              🎥 Síguenos en TikTok
            </a>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="px-4 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Cursos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="Guía Completa de Figuras Funko"
              description="Aprende todo sobre la historia, tipos y colecciones de Funko Pop"
              level="Principiante"
            />
            <CourseCard
              title="Valoración y Autenticidad"
              description="Identifica falsificaciones y determina el valor de tus colecciones"
              level="Intermedio"
            />
            <CourseCard
              title="Estrategias de Inversión"
              description="Convertir tu pasión en una inversión rentable"
              level="Avanzado"
            />
          </div>
        </section>

        {/* Social Media Section */}
        <section className="px-4 py-16 bg-funko text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Únete a Nuestra Comunidad</h2>
            <p className="text-lg mb-8">
              Sigue a @funkosporcelana1 en TikTok para contenido exclusivo sobre colecciones Funko
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="https://www.tiktok.com/@funkosporcelana1?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-funko px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                🎥 @funkosporcelana1
              </a>
              <a 
                href="https://hotm.io/DSHfBQ4q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                🛍️ Ver Productos
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
