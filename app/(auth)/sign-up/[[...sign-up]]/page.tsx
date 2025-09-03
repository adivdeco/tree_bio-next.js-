import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-bl from-cyan-300 via-purple-300 to-blue-500 flex items-center justify-center p-8">
            <div className="w-full  bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Left side - Brand/Info section */}
                <div className="w-full md:w-3/4  text-black p-8 flex flex-col justify-center relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute  top-0 left-0 w-full h-full overflow-hidden ">
                        <div className="absolute top-50 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-100 animate-blob"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-5 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>

                    <div className="relative ">
                        <div className="mb-8 ">
                            <div className='flex gap-4 items-center'>
                                <span className="w-16 h-16  rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                                    <img src="./logo.svg" alt="" />
                                </span>
                                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Join Our Community</h1>

                            </div>
                            <p className="text-lg mb-6 opacity-90">
                                Create an account to access exclusive features and content tailored just for you.
                            </p>
                        </div>


                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Secure authentication</span>
                            </li>
                            <li className="flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Personalized experience</span>
                            </li>
                            <li className="flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Priority support</span>
                            </li>
                        </ul>

                    </div>
                </div>

                {/* Right side - Sign up form */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                    <div className="mb-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Create Your Account</h2>
                        <p className="text-gray-600">Join us today and get started</p>
                    </div>

                    <div className="flex justify-center">
                        <SignUp
                            appearance={{
                                elements: {
                                    rootBox: "w-full max-w-md",
                                    card: "shadow-none w-full",
                                    headerTitle: "text-xl font-semibold text-gray-800",
                                    headerSubtitle: "text-gray-500",
                                    socialButtonsBlockButton:
                                        "border-gray-300 text-gray-700 hover:bg-gray-50",
                                    socialButtonsBlockButtonText: "font-medium",
                                    formButtonPrimary:
                                        "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-sm",
                                    footerActionText: "text-gray-600",
                                    footerActionLink: "text-indigo-600 hover:text-indigo-800 font-medium",
                                    formFieldInput:
                                        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg",
                                    identityPreviewEditButton: "text-indigo-600",
                                    formResendCodeLink: "text-indigo-600",
                                },
                            }}
                        />
                    </div>

                    <div className="mt-4 py-4 text-center">
                        <p className="text-sm text-gray-600">
                            By continuing, you agree to our{" "}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    )
}

