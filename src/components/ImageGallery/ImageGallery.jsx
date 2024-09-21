import s from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ dataSerch, openModal }) => {
  return (
    <ul className={s.galaryList}>
      {dataSerch.map(item => (
        <ImageCard key={item.id} dataSerch={item} openModal={openModal} />
      ))}
    </ul>
  );
};
export default ImageGallery;
