'use client'

import {
  AcademicCapIcon,
  BeakerIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Membership() {
  const benefits = [
    {
      icon: BeakerIcon,
      text: 'Pristup ekskluzivnim događajima i radionicama',
    },
    {
      icon: UserGroupIcon,
      text: 'Mogućnost umrežavanja sa stručnjacima iz različitih oblasti IT industrije',
    },
    {
      icon: RocketLaunchIcon,
      text: 'Priliku da učestvujete u zajedničkim projektima i stvarate inovativna rešenja',
    },
    {
      icon: AcademicCapIcon,
      text: 'Pristup resursima koji vam pomažu da postanete autoritet u svojoj oblasti',
    },
  ]

  return (
    <section
      id="membership"
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-devclub">
              Prednosti članstva u Developers Club-u
            </h2>
            <p className="text-base md:text-lg">Kao član Developers Club-a, dobićete:</p>

            <ul className="space-y-2">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 md:space-x-4 group p-2 md:p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-1.5 md:p-2 rounded-lg bg-devclub/10 group-hover:bg-devclub/20 transition-colors duration-300">
                    <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-devclub" />
                  </div>
                  <span className="text-base md:text-lg text-blue-50/90 group-hover:text-blue-50 pt-0.5 md:pt-1 transition-colors duration-300">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mt-4 md:mt-0"
          >
            <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-2xl shadow-black/20 border-2 border-white/10 group hover:border-devclub/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(97,165,194,0.3)]">
              <Image
                src="/img/welcome.jpg"
                alt="Welcome to Developers Club"
                width={600}
                height={400}
                className="object-cover w-full h-[250px] md:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
