import s from './ImageCard.module.css';

const ImageCard = ({ dataSerch, openModal }) => {
  const { urls, description, likes } = dataSerch;

  return (
    <li>
      <div>
        <img
          className={s.imgGalary}
          onClick={() => openModal({ url: urls.full, name: description })}
          src={urls.small}
          alt={description}
        />
      </div>
      <div className={s.likesBox}>
        <p>Likes: {likes} </p>
      </div>
    </li>
  );
};
export default ImageCard;
