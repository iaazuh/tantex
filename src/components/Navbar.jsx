import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-[#94a3b8] border-b border-black-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="tangitex logo"
              />
              <span className="hidden md:block text-white text-3xl font-bold ml-2"
                >Tangitex Technologies </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-500 rounded-md px-3 py-2"
                  >About Us</Link>
                <Link
                  to="/"
                  className="text-white hover:text-gray-500 rounded-md px-3 py-2"
                  >Our Services</Link>
               
		            <Link
                  to="/"
                  className="text-white hover:text-gray-500 rounded-md px-3 py-2"
                  >Meet Our Team</Link>
		            <Link
                  to="/"
                  className="text-white hover:text-gray-500 rounded-md px-3 py-2"
                  >Contact Us </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar