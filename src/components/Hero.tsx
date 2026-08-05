import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/monocycle-hero.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-5xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Redefiniendo la movilidad eléctrica.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-gray-100 max-w-2xl mx-auto"
        >
          Monociclos eléctricos, scooters y bicicletas seleccionadas con la máxima calidad y soporte.
        </motion.p>

        <motion.div className="mt-8 flex gap-4 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <a href="/productos" className="px-6 py-3 rounded-full bg-primary text-white shadow-lg">Comprar ahora</a>
          <a href="#more" className="px-6 py-3 rounded-full border border-white/30 text-white glass">Conocer más</a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 z-10 w-full flex justify-center">
        <div className="h-1 w-48 bg-white/40 rounded-full" />
      </div>
    </section>
  )
}
