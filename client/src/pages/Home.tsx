import Banner from '../components/Banner';
import FAQ from '../components/FAQ';
import HowItWork from '../components/HowItWork';
import WhyChoiceUs from '../components/WhyChoiceUs';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Banner />
      <HowItWork />
      <WhyChoiceUs />
      <FAQ />
    </div>
  );
};

export default Home;