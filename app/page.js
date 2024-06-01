
import { Activities } from "./components/activities";
import { RecentActivity } from "./components/recent-activity";
import AdvertisementSection from "./components/advertisement-section";
import Link from "next/link";
import { Links } from "./Utils/utils";



export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <main >
      <section>
        <AdvertisementSection />
      </section>
      <section>
        <RecentActivity />
      </section>
      <section>
        <Activities />
      </section>
      <section >
        <div className=' container items-center mx-auto flex flex-col w-full p-3'>
          <h1 className='text-center font-thin text-darkBlue dark:text-white'>Developed By--</h1>
          <Link href={Links.portfolio}>
            <span className='text-center text-darkBlue dark:text-white  font-extrabold'>©{currentYear} All Rights Reserved. </span>
            <span className='text-center font-extrabold text-lightBlue underline'>@ncubesdev</span>
          </Link>
          <h1 className='text-center font-normal italic text-darkBlue dark:text-white'>ncubes1999@gmail.com</h1>
        </div>
      </section>
    </main>
  );
}
