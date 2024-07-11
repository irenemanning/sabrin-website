"use client"
import { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  const [nav, setNav] = useState(false)

  const rowOneLinks =  [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    {title: "Shows", path: "/shows"},
    {title: "Contact", path: "/contact"},
  ]
  const rowTwoLinks =  [
    {title: "Acting", path: "/acting"},
    {title: "Comedy", path: "/comedy"},
    {title: "Films", path: "/films"},
    {title: "Performances", path: "/performances"},
    {title: "Modeling", path: "/modeling"},
    {title: "Visual Art", path: "/visualart"},
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-20 px-4 text-black nav" style={{background: "rgb(195, 240, 252)"}}>
      <div className='cm-logo'>
        <h1 className="text-5xl font-signature ml-2">
          <a className="link-underline link-underline-black" href="/" rel="noreferrer">
            Sabrín Diehl
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {rowOneLinks.map((link) => (
          <li key={link.title} className="nav-links px-4 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 hover:text-white duration-200 link-underline">
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
        {rowTwoLinks.map((link) => (
          <li key={link.title} className="nav-links px-4 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 hover:text-white duration-200 link-underline">
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"></div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li key={link.title} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar