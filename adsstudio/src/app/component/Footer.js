// Footer file

import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return(
    <footer className="p-4 text-white bg-gray-900">
    <div className="container flex flex-col justify-between mx-auto md:flex-row">
        <div>
          <h3 className="mb-2 text-lg font-semibold"><i>Contact Information</i></h3>
          <p>Email: info@adsstudio.com</p>
          <p>Phone: +387-62-054-807</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold"><i>Address</i></h3>
          <p>Branislava Đurđeva br.8, Sarajevo, Bosnia and Herzegovina</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold"><i>Follow Us</i></h3>
          
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/adsstudio" target="_blank" rel="noopener noreferrer">
                <Image className="" src="/slike/facebook.png" alt="facebook" width={40} height={0}/>
            </Link>
            <Link href="https://www.instagram.com/adsstudio" target="_blank" rel="noopener noreferrer">
                <Image className="" src="/slike/instagram.png" alt="instagram" width={40} height={0}/>
            </Link>
    </div>
        </div>
      </div>
    </footer>
    )
}