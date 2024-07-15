"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation" 

function Navbar() {
  const [nav, setNav] = useState(false)
  const { pathname } = usePathname() 

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Shows", path: "/shows" },
    { title: "Contact", path: "/contact" },
    { title: "Acting", path: "/acting" },
    { title: "Comedy", path: "/comedy" },
    { title: "Films", path: "/films" },
    { title: "Performances", path: "/performances" },
    // { title: "Modeling", path: "/modeling" },
    // { title: "Visual Art", path: "/visualart" },
  ]

  return (
    <div className="fixed top-0 left-0 z-50 flex flex-col h-full w-64 text-white bg-black p-4">
      <div className="mb-8">
        <h1 className="text-5xl font-signature text-yellow-500">
          <Link href="/">Sabrín Diehl</Link>
        </h1>
      </div>

      <button
        onClick={() => setNav(!nav)}
        className="md:hidden text-gray-500 mb-8"
      >
        {nav ? "Close" : "Menu"}
      </button>

      <ul
        className={`flex flex-col space-y-4 
          ${nav ? "block" : "hidden"} 
          md:flex md:space-y-0 md:space-x-4`}
      >
        {links.map((link) => {
  console.log('pathname:', pathname)
  console.log('link.path:', link.path)
  return (
    <li
      key={link.title}
      className={`nav-links capitalize font-medium ${
        pathname === link.path ? "text-yellow-500" : "text-white"
      } hover:scale-105 hover:text-yellow-500 duration-200`}
    >
      <Link href={link.path} onClick={() => setNav(false)}>
        {link.title}
      </Link>
    </li>
  )
})}

      </ul>
    </div>
  )
}

export default Navbar