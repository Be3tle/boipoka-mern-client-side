import { useContext, useEffect, useState } from 'react';
import logo from './bookworm.png';
import emblem from './user.png';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const [theme, setTheme] = useState('light');

  const handleThemeSwitch = () => {
    const html = document.documentElement;

    if (theme === 'light') {
      html.classList.remove('light');
      html.classList.add('dark');
      setTheme('dark');

      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';

    setTheme(currentTheme);
    const html = document.documentElement;
    html.classList.add(currentTheme);
  }, []);

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/add-book" className="flex items-center dark:text-violet-100">
          Add Book
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/all-books" className="flex items-center dark:text-violet-100">
          All Books
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/borrowed-books"
          className="flex items-center dark:text-violet-100"
        >
          Borrowed Books
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="fixed bg-opacity-25 border-0 bg-black top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 text-white">
        <div className="flex items-center justify-between ">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-10" src={logo} alt="" />
            <h1 className="dark:text-violet-100">
              boi<span className="font-normal">poka</span>
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {user ? (
                <Button
                  onClick={handleLogOut}
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span className="text-violet-100">Log Out</span>
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span className="text-violet-100">Log In</span>
                  </Button>
                </Link>
              )}
              <div className="w-8 rounded-full mr-3">
                <img
                  className="rounded-full"
                  src={user ? user?.photoURL : emblem}
                />
              </div>
              <input
                onClick={handleThemeSwitch}
                type="checkbox"
                className="toggle"
                id="my-toggle"
              />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-black"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm">
              <span className="font-medium text-gray-100">Log In</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;
