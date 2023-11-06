import Banner from '../../Components/Banner/Banner';
import Discount from '../../Components/Discount/Discount';
import Genres from '../../Components/Genres/Genres';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Genres></Genres>
      <Testimonial></Testimonial>
      <Discount></Discount>
    </div>
  );
};

export default Home;
