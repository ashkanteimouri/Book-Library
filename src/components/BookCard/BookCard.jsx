import { FaHeart } from "react-icons/fa";

import styles from "./BookCard.module.css";

function BookCard({ data, isLiked, onLike }) {
  const { author, image, language, pages, title } = data;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />

      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>

      <button onClick={() => onLike(data)}>
        <FaHeart color={isLiked ? "red" : "#e0e0e0"} />
      </button>
    </div>
  );
}

export default BookCard;
