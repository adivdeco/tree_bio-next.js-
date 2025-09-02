// import { SignIn } from '@clerk/nextjs'

// export default function Page() {
//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'>
//             <h1 className="text-2xl font-bold mb-6">Welcome! to TreeBio🌳</h1>
//             <p className="text-lg mb-4 font-semibold text-gray-500">
//                 Please sign in to continue. If you don't have an account, you can create
//                 one.
//             </p>

//             <div className='mt-6'>
//                 <SignIn />
//             </div>
//         </div>
//     )
// }




import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Sign in to access your account</p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <SignIn
                            appearance={{
                                elements: {
                                    rootBox: "w-full",
                                    card: "shadow-none w-full",
                                    headerTitle: "text-xl font-semibold text-gray-800",
                                    headerSubtitle: "text-gray-500",
                                    socialButtonsBlockButton:
                                        "border-gray-300 text-gray-700 hover:bg-gray-50",
                                    socialButtonsBlockButtonText: "font-medium",
                                    formButtonPrimary:
                                        "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm",
                                    footerActionText: "text-gray-600",
                                    footerActionLink: "text-indigo-600 hover:text-indigo-800 font-medium",
                                    formFieldInput:
                                        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
                                    identityPreviewEditButton: "text-indigo-600",
                                    formResendCodeLink: "text-indigo-600",
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="bg-gray-50 py-4 px-6 text-center">
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
    )
}