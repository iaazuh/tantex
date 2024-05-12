import coding from	'../assets/images/coding.png'
import graphicdesign from	'../assets/images/graphicdesign.png'
import mobileapp from	'../assets/images/mobileapp.png'
import promotion from	'../assets/images/promotion.png'
import socialmedia from	'../assets/images/socialmedia.png'
import technicalsupport from	'../assets/images/technicalsupport.png'

const Services = () => {
  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-gray-500 mb-6 text-center">
          Our Sevices
        </h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          <div className="bg-white rounded-xl transform hover:scale-105 transition-all duration:1000 shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">
                  <img
                    className="h-10 w-10 flex flex-shrink-0 items-center mr-4"
                    src={coding}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold">Web Design</h3>
              </div>
              <div className="mb-5">
               We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 2 --> */}
          <div className="bg-white rounded-xl transform hover:scale-105 transition-all duration:1000 shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">
                  <img
                    className="h-10 w-10 flex flex-shrink-0 items-center mr-4"
                    src={mobileapp}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold">App Development</h3>
              </div>
              <div className="mb-5">
               We offer impactful mobile app development services to bring your project to market on every device and platform. Talk to our mobile app experts today!
              </div>
            </div>
          </div>

          {/* <!-- Job Listing 3 --> */}
          <div className="bg-white rounded-xl transform hover:scale-105 transition-all duration:1000 shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">
                  <img
                    className="h-10 w-10 flex flex-shrink-0 items-center mr-4"
                    src={promotion}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold">Marketing</h3>
              </div>
              <div className="mb-5">
               We provide digital marketing services. Contact us today to learn more about what services can help your business grow.
              </div>
            </div>
          </div>

	        {/* <!-- Job Listing 4 --> */}
          <div className="bg-white rounded-xl transform hover:scale-105 transition-all duration:1000 shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">
                  <img
                    className="h-10 w-10 flex flex-shrink-0 items-center mr-4"
                    src={graphicdesign}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold">Graphics Design</h3>
              </div>
              <div className="mb-5">
              From logo design to print design and everything between. We'll customize our designs to your needs to create something you'll love!

              </div>
            </div>
          </div>

          {/* <!-- Job Listing 5 --> */}
          <div className="bg-white rounded-xl transform hover:scale-105 transition-all duration:1000 shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">
                  <img
                    className="h-10 w-10 flex flex-shrink-0 items-center mr-4"
                    src={socialmedia}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold">Digital Sales Campaigns</h3>
              </div>
              <div className="mb-5">
              We build custom Ecommerce websites & online stores that have every feature you need to run your online business.
              </div>
            </div>
          </div>

          {/* <!-- Job Listing 6 --> */}
          <div className="bg-white rounded-xl transform hover:scale-105 transition-all duration:1000 shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">
                  <img
                    className="h-10 w-10 flex flex-shrink-0 items-center mr-4"
                    src={technicalsupport}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold">Technical Support</h3>
              </div>
              <div className="mb-5">
              Our IT consulting services help you shape a winning IT strategy. we can expertly guide your IT and digital transformation initiatives from strategy to implementation.
              </div>
            </div>
          </div>
      </div>
    </section>
    </div>
  )
}

export default Services