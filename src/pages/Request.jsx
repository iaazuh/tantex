import { Link } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

const Request = ({addRequest}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [type, setType] = useState('Web Design')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  const submitRequest = (e) => {
    e.preventDefault()

    const newRequest = {
      name,
      email,
      contactNumber,
      type,
      description
    }
    addRequest(newRequest)
    toast.success('Request Submitted Successfully!')
    return navigate('/')
  }



  return (
    <>
    <section>
      <div class="container m-auto py-6 px-6">
        <Link
          to="/"
          class="text-indigo-500 hover:text-indigo-600 flex items-center">
          <FaArrowLeft className='inline-block pr-2 ' />Back To Home Page
        </Link>
      </div>
    </section>

    <section class="bg-indigo-50">
      <div class="container m-auto max-w-2xl py-24 w-[500px]">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitRequest}>
            <h2 class="text-3xl text-center font-semibold mb-6">Enter Request Details Here</h2>  
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Enter Full Name Here</label>
              <input
                type="text"
                id="name"
                name="title"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

	        <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="title"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
	        <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="title"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Contact Number"
                required
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
	        <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Request Type</label>
                <select
                id="type"
                name="type"
                class="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}>
                <option value="Web Design">Web Design</option>
                        <option value="App Development">App Development</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Graphics Design">Graphics Design</option>
                        <option value="Digital Sales Campaign">Digital Sales Campaign</option>
                        <option value="Technical Support">Technical Support</option>
                </select>
            </div>
		    <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label>
              <textarea
                id="description"
                name="description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add Request details, expectations, requirements, etc"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
                <div>
                <button
                    class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold 	
                    py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit">
                    Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    </>
  )
}

export default Request