import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className=" p-6 rounded-lg ">
	          <h3 className="text-2xl font-bold">Corporate Address</h3>
            <p className="mt-2 mb-4">
              23/24 Mechanic Village
              by Owena Park Lagos,
              Kosofe, Lagos
            </p>
            <Link
                    to="/Request"
                    className="inline-block bg-black text-white rounded-lg mt-10 px-4 py-2 hover:bg-gray-600">
                    Make a Request
                    </Link>
          </div>

{/* <---2nd slide---> */}
	        <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-2xl font-bold">For More Enquiries Contact Us On</h3>
            <p className="mt-2 mb-4">
              Email: info@tangitex.com.ng
            </p>
            <p className="mt-2 mb-4">
              Phone: +2348036346976
            </p>

            <h1 className="text-2xl font-bold">OR</h1>
            <p className="mt-2 mb-4">
              Chat Directly With Our 24hr Support by clicking below
            </p>

            <Link
            to="/"
            className="bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            >Chat</Link>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Contact