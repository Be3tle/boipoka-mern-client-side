import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const Discount = () => {
  const handleSubscription = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    const subscription = { email };

    if (subscription)
      Swal.fire({
        title: 'Awesome!',
        text: 'Successfully subscribed',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
  };
  return (
    <div>
      <div
        className="w-full min-h-[60vh] hero dark:bg-gray-500"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg?t=st=1699240647~exp=1699244247~hmac=f29aa2f6e500374318fae644389df1cf278f5cc207e78feecac883b8de6c7bbd&w=1060)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <p className="pt-2 pb-8 text-2xl antialiased text-center dark:text-gray-100">
            Get a 20% discount on your first order!
          </p>
          <form onSubmit={handleSubscription} className="flex flex-row">
            <input
              type="text"
              name="email"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <input
              type="submit"
              className="w-2/5 p-3 font-normal rounded-r-lg sm:w-1/3 bg-slate-950 text-white hover:bg-slate-900 border-0 font-norma"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discount;
