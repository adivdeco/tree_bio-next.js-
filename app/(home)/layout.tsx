import Navbar from "@/modules/home/components/navbar";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <main className="flex flex-col min-h-screen max-h-screen">
            {/* nav */}
            <Navbar />

            <div className="relative flex  w-full flex-col items-center justify-center ">

                <DotPattern glow={true} className={cn("[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]")} />
                {children}

            </div>

        </main>
    );
};

export default Layout;



{/* <div className="flex-1 flex flex-col px-4 pb-4">
    <div className="absolute  inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] dark:bg-[size:16px_16px] bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-[size:16px_16px]" />
    <DotPattern />
    {children}
</div> */}

// import Navbar from "@/modules/home/components/navbar";
// import { DotPattern } from "@/components/magicui/dot-pattern";
// import { cn } from "@/lib/utils";
// // import { Stars } from "@/components/magicui/stars"; // Optional: if you have this component

// interface Props {
//     children: React.ReactNode;
// }

// const Layout = ({ children }: Props) => {
//     return (
//         <main className="flex flex-col min-h-screen max-h-screen relative overflow-hidden">
//             {/* Background elements */}
//             <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/70 via-white to-purple-50/70 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20" />

//             {/* Animated dots pattern */}
//             <div className="absolute inset-0 -z-10">
//                 <DotPattern
//                     glow={true}
//                     className={cn(
//                         "opacity-50 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
//                         "animate-fade-in"
//                     )}
//                 />
//             </div>

//             {/* Optional: Floating stars effect */}
//             {/* <div className="absolute inset-0 -z-5 opacity-30">
//                 <Stars 
//                     speed={0.5} 
//                     count={100} 
//                     className="text-blue-400/30" 
//                 />
//             </div> */}

//             {/* Content container */}
//             <div className="relative flex-1 flex flex-col">
//                 {/* Navbar with subtle background */}
//                 <div className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/50 dark:border-gray-800/50">
//                     <div className="container mx-auto px-4">
//                         <Navbar />
//                     </div>
//                 </div>

//                 {/* Main content area */}
//                 <div className="flex-1 flex flex-col items-center justify-center relative py-8 px-4">
//                     <div className="w-full max-w-4xl mx-auto">
//                         {/* Decorative elements */}
//                         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse-slow dark:bg-purple-900/20" />
//                         <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow delay-1000 dark:bg-blue-900/20" />

//                         {/* Content card with subtle shadow and border */}
//                         <div className={cn(
//                             "relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md",
//                             "rounded-2xl border border-gray-200/50 dark:border-gray-800/50",
//                             "shadow-lg shadow-gray-200/50 dark:shadow-gray-900/30",
//                             "p-6 md:p-8 transition-all duration-300",
//                             "hover:shadow-xl hover:shadow-gray-300/30 dark:hover:shadow-gray-800/20"
//                         )}>
//                             {children}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Subtle footer */}
//             <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400 bg-white/30 dark:bg-gray-900/30 border-t border-gray-200/50 dark:border-gray-800/30 backdrop-blur-sm">
//                 <div className="container mx-auto px-4">
//                     © {new Date().getFullYear()} Your Brand Name. All rights reserved.
//                 </div>
//             </footer>

//             <style >{`
//                 @keyframes pulse-slow {
//                     0%, 100% { opacity: 0.3; }
//                     50% { opacity: 0.6; }
//                 }
//                 .animate-pulse-slow {
//                     animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//                 }
//                 .delay-1000 {
//                     animation-delay: 1s;
//                 }
//                 .delay-2000 {
//                     animation-delay: 2s;
//                 }
//                 @keyframes fade-in {
//                     from { opacity: 0; }
//                     to { opacity: 1; }
//                 }
//                 .animate-fade-in {
//                     animation: fade-in 1s ease-out;
//                 }
//             `}</style>
//         </main>
//     );
// };

// export default Layout;