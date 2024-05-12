import chibuike from	'../assets/images/chibuike.png'
import goodnews from	'../assets/images/goodnews.png'
import james from	'../assets/images/james.png'
import israel from	'../assets/images/israel.png'
import ifeanyi from	'../assets/images/ifeanyi.png'

const Team = () => {
  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                Meet The Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {/* <!-- Job Listing 1 --> */}
                <div className="bg-white rounded-xl cursor-default transform hover:scale-105 transition-all duration:1000 shadow-md relative">
                    <div className="p-4">
                    <div className="mb-6">
                    <img
                        className="h-30 w-30 flex flex-shrink-0  rounded-full items-center mr-4"
                        src={goodnews}
                        alt=""
                    />
                    <h3 className="text-s font-bold">Goodnews Ezedi</h3>
                    <h2 className="text-xl font-bold">Human Resource Manger</h2>  
                    </div>
                    </div>
                </div>
            
        {/* <!-- Job Listing 2 --> */}
                <div className="bg-white rounded-xl cursor-default transform hover:scale-105 transition-all duration:1000 shadow-md relative">
                    <div className="p-4">
                    <div className="mb-6">
                    <img
                        className="h-30 w-30 max-w-50 flex flex-shrink-0 rounded-full items-center mr-4"
                        src={james}
                        alt=""
                    />
                    <h3 className="text-s font-bold">James Ikediashi</h3>
                    <h2 className="text-xl font-bold mt=10">Lead Back-end Engineer</h2>  
                    </div>
                    </div>
                </div>
        {/* <!-- Job Listing 3 --> */}
                <div className="bg-white rounded-xl cursor-default transform hover:scale-105 transition-all duration:1000 shadow-md relative">
                    <div className="p-4">
                    <div className="mb-6">
                    <img
                        className="h-30 w-30 object-fill flex flex-shrink-0 rounded-full items-center mr-4"
                        src={ifeanyi}
                        alt=""
                    />
                    <h3 className="text-s font-bold">Azuh Ifeanyi Anderson</h3>
                    <h2 className="text-xl font-bold">Lead Front-end Engineer</h2>  
                    </div>
                    </div>
                </div>
        {/* <!-- Job Listing 4 --> */}
                <div className="bg-white rounded-xl cursor-default transform hover:scale-105 transition-all duration:1000 shadow-md relative">
                    <div className="p-4">
                    <div className="mb-6">
                    <img
                        className="h-30 w-30 max-w-50 flex flex-shrink-0 rounded-full items-center mr-4"
                        src={chibuike}
                        alt=""
                    />
                    <h3 className="text-s font-bold">Darlignton Odom</h3>
                    <h2 className="text-xl font-bold">Lead Technological Innovations</h2>  
                    </div>
                    </div>
                </div>
        {/* <!-- Job Listing 5 --> */}
                <div className="bg-white rounded-xl cursor-default transform hover:scale-105 transition-all duration:1000 shadow-md relative">
                    <div className="p-4">
                    <div className="mb-6">
                    <img
                        className=" w-30 max-h-s flex flex-shrink-0 rounded-full items-center mr-4"
                        src={israel}
                        alt=""
                    />
                    <h3 className="text-s font-bold">Israel Oke</h3>
                    <h2 className="text-xl font-bold">Team Lead UI/UX Design</h2>  
                    </div>
                    </div>
                </div>      
                </div>
            </div>
        </section>
    </div>
  )
}

export default Team