import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-bl from-cyan-300 via-purple-300 to-blue-500 flex items-center justify-center p-4 ">
            <div className="w-full  bg-white/90  rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Left side - Brand/Info section */}
                <div className="w-full md:w-3/4 text-black p-8 flex flex-col justify-center relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">
                        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-100 animate-blob"></div>
                        <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="mb-8 ">
                            <div className='flex gap-4 items-center'>
                                <span className="w-16 h-16  rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                                    <img src="./logo.svg" alt="" />
                                </span>
                                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Welcome Back</h1>

                            </div>
                            <p className="text-lg text-gray-700">
                                Sign in to access your account and continue your journey with us.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Secure authentication</span>
                            </li>
                            <li className="flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Personalized dashboard</span>
                            </li>
                            <li className="flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Seamless experience</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right side - Sign in form */}
                <div className="w-full md:w-3/5 p-10 flex flex-col justify-center bg-white">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In to Your Account</h2>
                        <p className="text-gray-600">Welcome back! Please enter your details</p>
                    </div>

                    <div className="flex justify-center">
                        <SignIn
                            appearance={{
                                elements: {
                                    rootBox: "w-full max-w-md",
                                    card: "shadow-none w-full",
                                    headerTitle: "text-xl font-semibold text-gray-800",
                                    headerSubtitle: "text-gray-500 mb-6",
                                    socialButtonsBlockButton:
                                        "border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded-lg",
                                    socialButtonsBlockButtonText: "font-medium",
                                    formButtonPrimary:
                                        "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-md transition-all duration-200 rounded-lg py-3",
                                    footerActionText: "text-gray-600",
                                    footerActionLink: "text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200",
                                    formFieldInput:
                                        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-3",
                                    identityPreviewEditButton: "text-indigo-600 hover:text-indigo-800",
                                    formResendCodeLink: "text-indigo-600 hover:text-indigo-800",
                                    formFieldLabel: "text-gray-700 font-medium",
                                    dividerLine: "bg-gray-200",
                                    dividerText: "text-gray-400",
                                },
                            }}
                        />
                    </div>

                    <div className="mt-8 pt-6 text-center border-t border-gray-100">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <a href="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                                Sign up here
                            </a>
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                            By signing in, you agree to our{" "}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                                Terms
                            </a>{" "}
                            and{" "}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
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