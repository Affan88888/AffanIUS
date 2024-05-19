//portfolio page

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";

export default function portfolio () {
    return (
        <>
        <section className="mb-8">
            <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Our Projects</h2>
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <ul className="list-disc">
            <li><p className="text-lg">Welcome to the showcase of our architectural endeavors – a curated collection of
             projects that define the essence of <i>ADS studio</i>. Each creation is a testament to our dedication
              to innovation, thoughtful design, and a commitment to shaping environments that stand the test of time.</p></li>
            <li><p className="text-lg">In our portfolio, you'll find a diverse range of projects, each telling a unique story.
             From contemporary residences that redefine urban living to cutting-edge commercial spaces that inspire
              collaboration, our portfolio reflects the versatility of our design approach.</p></li>
            </ul>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project1.jpg" alt="project1" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">VILA SARA</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project2.jpg" alt="project2" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">BORDO ARENA</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project3.jpg" alt="project3" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">BOSNA-S BUSINESS BUILDING</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project4.jpg" alt="project4" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">ASA BUSINESS CENTER</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <ul className="list-disc">
            <li><p className="text-lg">At <i>ADS studio</i>, we don't just build structures, we craft experiences.
             Every project is an exploration of the interplay between space, light, and materials. We believe in 
             transforming spaces into living, breathing entities that respond to the needs and aspirations of those
              who inhabit them.</p></li>
            </ul>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project5.jpg" alt="project5" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">HOTEL CITY BOUTIQUE</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project6.jpg" alt="project6" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">HOTEL GALEB</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project7.jpg" alt="project7" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">HOTEL CORNICHE TOWER</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <ul className="list-disc">
            <li><p className="text-lg">Our commitment to innovation goes hand in hand with our 
            dedication to sustainability. Discover how we seamlessly integrate eco-friendly 
            practices into our designs, creating spaces that are not only aesthetically pleasing
             but also environmentally responsible..</p></li>
            </ul>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project8.jpg" alt="project8" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">TOYOTA SHOWROOM</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project9.jpg" alt="project9" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">RESIDENTAL HOUSE</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project10.jpg" alt="project10" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">HOTEL RADON PLAZA</p>
                </div>
            </div>
        </section>

      

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project11.jpg" alt="project11" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">RESIDENTAL HOUSE HRAPOVIĆ</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <ul className="list-disc">
            <li><p className="text-lg">Behind every project, there's a unique collaboration with our
             clients. We take pride in turning their visions into reality, fostering a partnership 
             that goes beyond the drawing board. Read about our client success stories and the transformative
              journey we embark on together.</p></li>
            </ul>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project12.jpg" alt="project12" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">KOŠEVO HILL MOSQUE</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project13.jpg" alt="project13" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">FAMILY RESIDENCE</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project14.jpg" alt="project14" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">AVAZ TWIST TOWER</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/project15.jpg" alt="project15" width={2000} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">OLYMPIC SWIMMING POOL SARAJEVO</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <ul className="list-disc">
            <li><p className="text-lg">Ready to embark on your own architectural journey? 
                <Link href="contact/" className="text-sky-400 hover:bg-gray-600 px-4 py-2 rounded-md no-underline text-xl">
                  Contact us
                </Link>
                 to discuss how we can bring your vision to life.</p></li>
            </ul>
            </div>
        </section>
        </> 
    )
}