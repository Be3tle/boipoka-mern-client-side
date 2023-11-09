/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
  const { id } = useParams();

  const [book, setBook] = useState([]);

  // console.log(book);
  useEffect(() => {
    fetch(`https://boipoka-server.vercel.app/books/${id}`).then((res) =>
      res.json().then((data) => {
        setBook(data);
      })
    );
  }, [id]);

  // console.log(id, book);

  return (
    <div>
      <DetailsCard book={book}></DetailsCard>
    </div>
  );
};

export default Details;
