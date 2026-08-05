import Hero from '../src/components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6">Secciones destacadas</h2>
        <p className="text-lg text-gray-600">Catálogo, Marcas y Soporte técnico — en construcción.</p>
      </section>
    </div>
  )
}
