import { Header }  from '../components/Header';
import { Banner }  from '../components/BannerHome';
import { Feature } from '../components/FeaturesHome'
import { Slides } from '../components/Slides'
import { api } from '../../services/api';
import { GetStaticProps } from 'next';

interface HomeProps {
  continents: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[]
}

export default function Home({continents}: HomeProps) {

  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <Slides continents={continents}/>
    </>
  );
}
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await api.get('/continents');
  const continents = response.data;
  
  return {
    props: {
      continents,
    }
  }
}