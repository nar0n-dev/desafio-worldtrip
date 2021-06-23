import { Header }  from '../../components/Header';
import { BannerPages }  from '../../components/BannerPages';
import { FeaturePages } from '../../components/FeaturesPages';
import { CardsCountry } from '../../components/CardCountry';
import { api } from '../../../services/api';
import { apiUnsplash } from '../../../services/apiUnsplash';
import { GetStaticProps, GetStaticPaths } from 'next';

interface ContinentProps {
  id: string;
  title: string;
  description: string;
  image: string;
  bio?: string;
  countries: number;
  cities: number;
  languages: number;
}

interface CountryProps {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent:string;
  image?: string;
}

interface SlugProps {
  continent: ContinentProps;
  countries: CountryProps[];
}


export default function Slug({continent, countries}: SlugProps) {
  return (
    <>
        <Header />
        <BannerPages 
          bgImage={continent.image} 
          name={continent.title}
        />
        <FeaturePages 
          description={continent.bio}
          countries={continent.countries}
          languages={continent.languages}
          cities={continent.cities}
        />
        <CardsCountry 
          countries={countries}
        />
    </>

  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const continentResponse = await api.get(`/continents/${String(slug)}`)
  const continent = continentResponse.data
  
  
  const countryResponse = await api.get(`/countries?continent${String(slug)}`)
  const countries = countryResponse.data
  // const countries: CountryProps[] = await countryData.map(async (country: CountryProps) => {
  // const unsplashResponse = await apiUnsplash.get(`/search/photos?page=1&per_page=1&query=${country.id}`)
  //   return {
  //     ...country, 
  //     image: unsplashResponse.data.results[0].urls.raw,
  //   }
  // })

  return {
    props: {
      continent,
      countries
    }
  }
}