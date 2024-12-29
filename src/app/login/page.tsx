import Link from 'next/link';


export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-y-[20px] mt-[30px] mb-[30px] pt-[70px]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
       
        {/* Heading */}
        <h1 className="text-[24px] text-blue-950 font-[600] text-center mb-6">
         login to Your Account
        </h1>

        {/* Login Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          {/* Checkbox and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keep-me-signed-in"
                className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                defaultChecked
              />
              <label htmlFor="keep-me-signed-in" className="text-sm text-gray-700">
                Keep me logged in
              </label>
            </div>
            <Link href="#" className="text-sm text-[#BCBCBC]">Forgotten your password?</Link>
          </div>

          {/* Terms and Conditions */}
          <p className="text-center text-sm text-[#8D8D8D] mb-6">
            By logging in, you agree to QAFIX <span className="underline">Privacy</span> <br /> <span className="underline">Policy</span> and <span className="underline">Terms of Use</span>.
          </p>


          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-950 text-white text-lg font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-950"
          >
             LogIn
          </button>
        </form>

        {/* Join Us Paragraph */}
        <div className="text-center mt-9 text-sm text-gray-700">
          <p>Not a Member? <Link href='/'><span className="font-bold text-blue-950">Join Us.</span></Link></p>
        </div>
      </div>
    </div>
  );
}