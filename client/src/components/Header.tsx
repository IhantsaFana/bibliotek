'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Livres', href: '#' },
  { name: 'Réservations', href: '#' },
  { name: 'Mon compte', href: '#' },
  { name: 'À propos', href: '#' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
    {/* HEADER */}
    <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 flex items-center">
          <img
            src="/bibliotek.svg"
            alt="Bibliotek Logo"
            className="h-8 w-auto"
          />
          <span className="ml-2 text-lg font-semibold text-indigo-600">Bibliotek</span>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <Bars3Icon className="size-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/login" className="text-sm font-semibold text-gray-900">
          Connexion <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>

    {/* Menu Mobile */}
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <img src="/logo.svg" alt="Bibliotek Logo" className="h-8 w-auto" />
            <span className="ml-2 text-lg font-semibold text-indigo-600">Bibliotek</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <XMarkIcon className="size-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 space-y-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
              {item.name}
            </a>
          ))}
          <a href="#" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
            Connexion
          </a>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  </>
  )
}
