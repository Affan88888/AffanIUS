// home page
import Slider from './component/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";

export default function Home(){
  return (
    <main>
      <div>
        <section className="mb-8">
          <h1 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Welcome to ADS Studio</h1>
          <p className="text-lg">Your trusted partner in architectural design and innovation.</p>
        </section>
        
        <Slider/>
        <br></br>
        <section className="mb-8">
          <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Who we are?</h2>
          <div className="container flex flex-col justify-between mx-auto md:flex-row">
            
          <Image src="/slike/text1.jpg" alt="text1" width={800} height={140} />

          <ul className="list-disc">
            <li><p className="text-lg"><b>ADS studio</b> is a leading architectural practice located
           in Sarajevo, Bosnia and Herzegovina. We are constantly striving to achieve inspiring
            and exciting design solutions that make a genuine difference and add value to our
             clients, the end-users, and our society.</p></li>
            <li><p className="text-lg">The studio was founded in 1996 by <b>Faruk Kapidžić </b>
           and is active in urban and architectural programming, city planning and urban design,
            architectural and interior design, and supervision of construction. Balancing and 
            collaborating between different disciplines is an essential driving force of our practice.</p></li>
            </ul>
            </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Process</h2>
          <div className="container flex flex-col justify-between mx-auto md:flex-row">

          <ul className="list-disc">
            <li><p className="text-lg">For over 25 years <l>ADS studio</l> has developed innovative urban and architectural
           solutions through close cooperation with our local and international clients. The success of the 
           studio’s recent work is built upon an extensive transdisciplinary approach to analysis and development
            of new dynamic and operational solutions for the increasing complexity of our global society, which
             is characterized by specific regulatory contexts, demanding schedules and budgets, specific and 
             complex programmatic design requirements and imperative for energy effective and sustainable buildings.</p></li>
            <li><p className="text-lg">We work in close collaboration with our clients to achieve the optimal solution
           and meet their goals and interest. Our internationally experienced and multidisciplinary team is very
            strong and we are actively working to find a balance between form and function, beauty and purpose,
             vision and performance, art and technology, and to create an ideal space in which people in today’s
              modern and knowledge-based society can interact with each other and enjoy a high quality of the living
               and working environment.</p></li>
            </ul>

            <Image src="/slike/text2.jpg" alt="text2" width={700} height={140} />

            </div>
        </section>

        <section className="mb-8">
          <Link href="services/" className="no-underline text-slate-100">
            <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Our Services</h2>
          </Link>
          <p className="text-lg">
            Explore our comprehensive range of architectural services, from conceptualization to
            execution.
          </p>
        </section>

        <section className="mb-8">
          <Link href="portfolio/" className="no-underline text-slate-100">
            <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Portfolio</h2>
          </Link>
          <p className="text-lg">
            See all our previous projects.
          </p>
        </section>

        <section className="mb-8">
          <Link href="contact/" className="no-underline text-slate-100">
            <h2 className="text-4xl font-bold duration-300 bg-gray-900 hover:opacity-90 hover:scale-110">Contact Us</h2>
          </Link>
          <p className="text-lg">
            Ready to turn your architectural vision into reality? Contact us to discuss your
            project.
          </p>
        </section>
      </div>
      </main>
    
  );
}
