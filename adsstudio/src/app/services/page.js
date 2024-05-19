//services page

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

export default function services () {
    return (
        <>
        <section className="mb-8">
            <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">What we do</h2>
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <ul className="list-disc">
            <li><p className="text-lg">Our Architectural services include Plot research, Design, Licenses Approvals, preparation of
                    construction documents, and construction administration. We also provide a wide variety of
                    services including feasibility studies, architectural programming and project management.</p></li>
            <li><p className="text-lg">Additionally we are specialized in Facade Design, Interior Design, Office Design, Graphic
                    Design and we can provide several design scenarios on each case according to the client needs.</p></li>
            <li><p className="text-lg">Our services boxes will be the following:</p></li>
            </ul>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/services1.jpg" alt="architecture" width={500} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">Architecture</p>
                </div>
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/services2.jpg" alt="interior design" width={500} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">Interior Design</p>
                </div>
            </div>
        </section>
        
        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/services3.jpg" alt="facade engineering" width={500} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">Facade Engineering</p>
                </div>
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/services4.jpg" alt="office design" width={500} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">Office Design</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="container flex flex-col justify-between mx-auto md:flex-row">
            <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/services5.avif" alt="eco design" width={500} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">Eco Design</p>
                </div>
                <div className="flex flex-col items-center hover:opacity-90 hover:scale-110 duration-300">
                    <Image className="" src="/slike/services6.webp" alt="project management" width={500} height={0}/>
                    <p className="text-gray-300 text-4xl font-bold hover:opacity-90 hover:scale-110 duration-300">Project Management</p>
                </div>
            </div>
        </section>
        </>
        

        
    )
}