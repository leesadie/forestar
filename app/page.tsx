import getTrails from "./actions/getTrails";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import Banner from "./components/Banner";
import TrailCard from "./components/trails/TrailCard";
import Navbar from "./components/navbar/Navbar";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const trails = await getTrails();

  const currentUser = await getCurrentUser();

  if (trails.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Navbar currentUser={currentUser}/>
      <Banner />
      <div className="font-medium text-xl lg:ml-20 ml-9 mb-4">
        Featured Trails
      </div>
      <Container>
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-10
            sm:gap-8
            pb-10
          "
        >
          {trails.map((trail) => (
            <TrailCard 
              key={trail.id}
              data={trail}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}
