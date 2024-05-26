
import { Activities } from "./components/activities";
import { RecentActivity } from "./components/recent-activity";
import AdvertisementSection from "./components/advertisement-section";
import { ActivityCard } from "./components/activity-card";




export default function Home() {



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
    </main>
  );
}
