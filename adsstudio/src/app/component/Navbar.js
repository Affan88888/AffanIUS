//Navbar file

import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
return(

<header className="p-4 bg-gray-900">
          <nav className="container flex items-center justify-between mx-auto">
            <div>
              <Link href="/">
                <Image src="/slike/logo.jpg" alt="ADS Studio Logo" width={480} height={160}/>
              </Link>
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-sky-400 hover:bg-gray-600 px-4 py-2 rounded-md no-underline text-xl">
                   Home
                </Link>
              </li>
              <li>
                <Link href="services/" className="text-sky-400 hover:bg-gray-600 px-4 py-2 rounded-md no-underline text-xl">
                  Services
                </Link>
              </li>
              <li>
                <Link href="portfolio/" className="text-sky-400 hover:bg-gray-600 px-4 py-2 rounded-md no-underline text-xl">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="contact/" className="text-sky-400 hover:bg-gray-600 px-4 py-2 rounded-md no-underline text-xl">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        )
        }