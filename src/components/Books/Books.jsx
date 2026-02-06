import { useState } from "react";
import { books as bookData } from "../../constants/mockData";

import BookCard from "../BookCard/BookCard";
import SideCard from "../SideCard/SideCard";
import SearchBox from "../SearchBox/SearchBox";

import styles from "./Books.module.css";

function Books() {
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState([]);

  const filteredBooks = bookData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleLike = (book) => {
    setLiked((prev) =>
      prev.find((b) => b.id === book.id)
        ? prev.filter((b) => b.id !== book.id)
        : [...prev, book],
    );
  };

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} />

      <div className={styles.container}>
        <div className={styles.cards}>
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              isLiked={liked.some((b) => b.id === book.id)}
              onLike={handleLike}
            />
          ))}
        </div>

        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
