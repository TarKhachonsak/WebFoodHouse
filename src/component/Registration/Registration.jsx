const Registration = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#50D6FF]">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex w-full md:max-w-4xl">
                <div className="bg-[#FFF346] py-56 flex flex-col justify-center items-center w-full md:w-1/2 p-6 h-full">
                    <h2 className="text-2xl font-bold">Welcome!</h2>
                    <p className="text-center mb-4">Log in to enjoy the new Food house and menu recipes.</p>
                </div>
                <div className="w-full md:w-1/2 px-6 py-10">
                    <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Username</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        </div>

                        <button className="w-full bg-[#FFF346] text-black py-2 rounded-lg hover:bg-yellow-300 transition duration-300">Apply Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration