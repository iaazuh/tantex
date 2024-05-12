import about from '../assets/images/about.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <section className="py-4 flex items-centre justify-center m=0">
            <div className="container-xl lg:container m-0 p=0">
                <div className="grid grid-cols-1 md:grid-cols-2 p-4 ">
                <div className="bg-white-100 p-6  ">
                    <h4 className="text-2xl font-bold">Tangitex Technologies</h4>
                    <span className="hidden md:block text-black pt-5 text-3xl font-bold ml-2"
                        >Meeting All Your Tech Needs! </span>
                    <p className="mt-2 mb-4 pt-10 flex items-centre justify-center">
                    Tangitex is a leading software development agency with a dedicated design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
                    </p>
                    <Link
                    to="/Request"
                    className="inline-block bg-black text-white rounded-lg mt-10 px-4 py-2 hover:bg-gray-600">
                    Get Started
                    </Link>
                </div>
                    <div className="bg-white-100 p-2">
                    <img
                        className="h-auto w-auto"
                        src={about}
                        alt=""
                    />
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About