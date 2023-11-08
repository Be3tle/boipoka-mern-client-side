import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBook = () => {
  const book = useLoaderData();
  const { _id, title, author, genre, quantity, rating, description, imgUrl } =
    book;
  console.log(book);

  const handleUpdateBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.bookName.value;
    const author = form.authorName.value;
    const genre = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const imgUrl = form.photo.value;

    const updateBook = {
      title,
      description,
      rating,
      genre,
      quantity,
      author,
      imgUrl,
    };

    console.log(updateBook);

    // send data to the server
    fetch(`http://localhost:5000/books/${params.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Book updated successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="bg-cyan-50 p-24">
      <section className="p-6 bg-gray-800 text-gray-50">
        <form
          onSubmit={handleUpdateBook}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Update the Book</p>
              <p className="text-xs">Please change necessary information.</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Book name</label>
                <input
                  name="bookName"
                  type="text"
                  defaultValue={title}
                  placeholder="Book name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Author name</label>
                <input
                  name="authorName"
                  type="text"
                  defaultValue={author}
                  placeholder="Author name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Category</label>
                <input
                  name="category"
                  type="text"
                  defaultValue={genre}
                  placeholder="Category"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Quantity</label>
                <input
                  name="quantity"
                  defaultValue={quantity}
                  type="number"
                  placeholder="Quantity"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Photo URL</label>
                <input
                  name="photo"
                  defaultValue={imgUrl}
                  type="text"
                  placeholder="Photo URL"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Rating</label>
                <input
                  name="rating"
                  defaultValue={rating}
                  type="number"
                  placeholder="Rating"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full">
                <input
                  type="submit"
                  value="Update"
                  className="btn rounded-md w-full"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateBook;
