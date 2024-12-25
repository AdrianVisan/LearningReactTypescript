import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings showFull={false} />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
