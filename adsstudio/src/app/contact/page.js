//contact page

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";
import SignUp from '../component/signup';

export default function services () {
    return (
        <>
        <section className="mb-8">
            <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Get in Touch</h2>
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <ul className="list-disc">
            <li><p className="text-lg">Thank you for considering <i>ADS studio</i> for your upcoming project.
             Whether you have a specific vision in mind or are seeking expert guidance, we're here to turn your
              architectural aspirations into reality. Your journey starts here, and we look forward to being a part of it.</p></li>
            </ul>
            </div>
        </section>

        <section className="mb-8">
        <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Where to find us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.897371235344!2d18.4156793!3d43.8579558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8da5be3f95d%3A0xa662899c5666c597!2sBranislava%20%C4%90ur%C4%91eva%208%2C%20Sarajevo%2071000!5e0!3m2!1sen!2sba!4v1704387324782!5m2!1sen!2sba"
            class="mx-auto" 
            width="95%"
            height="450"></iframe>
        </section>

        <section className="container flex flex-col justify-between mx-auto md:flex-row">
            <div className="mx-auto bg-gray-900 rounded-md p-6 shadow-md">
                <h2 className="text-4xl font-bold duration-300 hover:opacity-90">Contact Us</h2>

            <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Email:</h3>
                <p className="text-blue-500"><a href="mailto:info@yourstudio.com">info@adsstuio.com</a></p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Phone:</h3>
                <p className="text-blue-500"> +387-62-054-807</p>
             </div>

            <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Social Media:</h3>
            <div className="flex space-x-4">
            <Link href="https://www.facebook.com/adsstudio" target="_blank" rel="noopener noreferrer">
                <Image className="" src="/slike/facebook.png" alt="facebook" width={50} height={0}/>
            </Link>
            <Link href="https://www.instagram.com/adsstudio" target="_blank" rel="noopener noreferrer">
                <Image className="" src="/slike/instagram.png" alt="instagram" width={50} height={0}/>
            </Link>

    </div>
  </div>
</div>

<SignUp/>
</section>
        </>
    )
}