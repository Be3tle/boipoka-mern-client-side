import Swal from 'sweetalert2';

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.bookName.value;
    const author = form.authorName.value;
    const genre = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const imgURL = form.photo.value;

    const newBook = {
      title,
      description,
      rating,
      genre,
      quantity,
      author,
      imgURL,
    };

    console.log(newBook);

    // send data to server
    fetch('', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Added successfully!',
            text: 'Do you want to continue?',
            icon: 'success',
            confirmButtonText: 'Sure!',
          });
        }
      });
  };
  return (
    <div className="bg-red-50 p-24">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handleAddBook}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add Your Book</p>
              <p className="text-xs">
                Please fill out the following information.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Book name</label>
                <input
                  name="bookName"
                  type="text"
                  placeholder="Book name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Author name</label>
                <input
                  name="authorName"
                  type="text"
                  placeholder="Author name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Category</label>
                <input
                  name="category"
                  type="text"
                  placeholder="Category"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Short Description</label>
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Quantity</label>
                <input
                  name="quantity"
                  type="number"
                  placeholder="Quantity"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Rating</label>
                <input
                  name="rating"
                  type="number"
                  placeholder="Rating"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <input
                type="submit"
                value="Add Book"
                className="btn md:w-[810px] rounded-md "
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddBook;
