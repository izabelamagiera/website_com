import { Metadata } from 'next';
import Header from '../components/Header/Header';
import { Container, Wrapper } from '../styles';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Portfolio/Projects';
import Footer from '../components/Footer/Footer';
import { getHome } from '../(sanity)/pages/homepage-query';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '../components/utils/Loading/Loading';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getHome();
  return {
    title: title ? `${title}` : 'Izabela Magiera | Web developer',
    description: description ? `${title}` : 'Description'
  };
}
export default async function Home() {
  const page = await getHome();

  return (
    <>
      {page ? (
        <Suspense fallback={<Loading />}>
          <Wrapper>
            <Container>
              <Header links={page.links} />
              <About about={page.about} reviews={page.reviews} />
              <Experience {...page.experience} />
              <Projects {...page.portfolio} />
              <Footer />
            </Container>
          </Wrapper>
        </Suspense>
      ) : (
        notFound()
      )}
    </>
  );
}
