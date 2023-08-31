
import { Container } from './components/Container';
import { CarrouselContainer } from './components/CarrouselContainer';
import { ArticleCard } from './components/ArticleCard';
import { GalleryContainer } from './components/GalleryContainer';
import { ArticleGallery } from './components/ArticleGallery';
import { ThumbnailGallery } from './components/ThumbnailGallery';
import { ContainerGallery } from './components/ContainerGallery';
import { GridElements } from './components/GridElements';
import './style/index.scss';

function App() {
  

  return (
    <>
      <Container url={"/assets/Recurso-1.jpg"}/>
      <ArticleCard/>
      <ContainerGallery/>
      <GalleryContainer/>
      <ArticleGallery/>
      <CarrouselContainer />
      <ThumbnailGallery/>
      <GridElements/>
    </>
  )
}

export default App
