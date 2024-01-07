import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const [regError, setRegError] = useState('');
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    // reset error

    setRegError('');

    const pwRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!pwRegex.test(password)) {
      setRegError(
        'Password should contain at least 6 characters, a capital letter and a special character'
      );
      return;
    }
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: 'Congrats!',
          text: 'Registration successful',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      })
      .catch((error) => {
        console.error(error);
        setRegError(error.message);
      });
  };

  return (
    <div className="text-center flex justify-center items-center py-28">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 my-20">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Name
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>{' '}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>{' '}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          {regError && <p className="text-red-600">{regError}</p>}
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-red-50">
            Register
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account?
          <a
            rel="noopener noreferrer"
            href="/login"
            className="underline text-gray-100"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
