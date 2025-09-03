"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Link, Loader2, Sparkles, Crown, Zap, Target } from "lucide-react";
import { checkProfileUsernameAvailability, claimUsername } from "@/modules/profile/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ClaimLinkForm = () => {
    const router = useRouter();
    const [origin, setOrigin] = useState("");
    const [linkValue, setLinkValue] = useState("");
    const [isChecking, setIsChecking] = useState(false);
    const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isClaming, setIsClaiming] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin);
        }
    }, []);

    useEffect(() => {
        if (linkValue.trim()) {
            const timer = setTimeout(async () => {
                setIsChecking(true);
                try {
                    const result = await checkProfileUsernameAvailability(linkValue);
                    setIsAvailable(result.available);
                    setSuggestions(result.suggesations || []);
                } finally {
                    setIsChecking(false);
                }
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setIsAvailable(null);
            setSuggestions([]);
        }
    }, [linkValue]);

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            if (linkValue.trim() && isAvailable) {
                setIsClaiming(true);
                const result = await claimUsername(linkValue);
                if (result?.success) {
                    toast.success("Link claimed successfully!");
                    setLinkValue("");
                    router.push(`/admin`)
                }
            }
        } catch (error) {
            console.error("Error claiming link:", error);
            toast.error("Failed to claim link. Please try again.");

        }
        finally {
            setIsClaiming(false);
        }
    };

    const displayOrigin = origin
        ? origin.replace("https://", "").replace("http://", "")
        : "treebio.com";

    return (
        <div className="space-y-8 max-w-md mx-auto w-full">
            {/* Header Section */}
            <div className="text-center space-y-3">
                <div className="flex justify-center">
                    <div className="relative">
                        <Crown className="w-10 h-10 text-amber-500 mb-2 mx-auto" />
                        <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-1 -right-2 animate-pulse" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Claim Your Unique Link
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                    Secure your personalized TreeBio URL to share with the world
                </p>
            </div>

            {/* Form */}
            <form
                className="space-y-6 flex flex-col items-center"
                onSubmit={handleSubmit}
            >
                <div className="w-full">
                    <div className={`flex items-center border rounded-xl overflow-hidden transition-all bg-white dark:bg-neutral-900 shadow-sm
                        ${isFocused ? 'border-blue-500 shadow-md shadow-blue-100 dark:shadow-blue-900/20' : 'border-neutral-200 dark:border-neutral-700'}
                        ${isAvailable === false ? 'border-red-500 shadow-red-100 dark:shadow-red-900/20' : ''}
                        ${isAvailable === true ? 'border-green-500 shadow-green-100 dark:shadow-green-900/20' : ''}`}
                    >
                        <div className="flex items-center px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-r border-neutral-200 dark:border-neutral-700">
                            <Link className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {displayOrigin}/
                            </span>
                        </div>
                        <div className="flex-1 relative flex items-center">
                            <Input
                                type="text"
                                placeholder="yourname"
                                value={linkValue}
                                onChange={(e) =>
                                    setLinkValue(
                                        e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "")
                                    )
                                }
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                maxLength={30}
                                className="text-semibold h-14 px-4 border-0 shadow-none focus:ring-0 focus:outline-none bg-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-lg"
                            />
                            {linkValue && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    {isChecking ? (
                                        <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                                    ) : isAvailable ? (
                                        <div className="relative">
                                            <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
                                            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
                                        </div>
                                    ) : (
                                        <div className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                            !
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Availability Message */}
                    {linkValue && !isChecking && (
                        <div className="mt-3 text-sm animate-fadeIn">
                            {isAvailable ? (
                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                                    <Check className="w-4 h-4 flex-shrink-0" />
                                    <span>
                                        <span className="font-medium">{displayOrigin}/{linkValue}</span> is available!
                                    </span>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded-lg mb-2">
                                        <Target className="w-4 h-4 flex-shrink-0" />
                                        <span>This username is already taken</span>
                                    </div>
                                    {suggestions.length > 0 && (
                                        <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <p className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-1 flex items-center gap-1">
                                                <Zap className="w-3 h-3" />
                                                Try these available suggestions:
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {suggestions.map(s => (
                                                    <button
                                                        key={s}
                                                        type="button"
                                                        className="text-xs px-3 py-1.5 bg-white dark:bg-blue-800 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-200 rounded-full hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors shadow-sm"
                                                        onClick={() => setLinkValue(s)}
                                                    >
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>

                <Button
                    type="submit"
                    disabled={!linkValue.trim() || !isAvailable || isChecking}
                    className="w-full h-12 text-base font-medium relative overflow-hidden group"
                    size="lg"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {isClaming ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <>
                                <Crown className="w-4 h-4" />
                                Claim Your TreeBio Link
                            </>
                        )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300"></span>
                </Button>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center w-full">
                    By continuing, you agree to TreeBio's{" "}
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>.
                </p>
            </form>

            {/* Preview */}
            {linkValue && isAvailable && (
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-700/50 animate-fadeIn">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                        <Link className="w-4 h-4" />
                        Your personalized link:
                    </div>
                    <div className="font-mono text-sm bg-white dark:bg-blue-900/30 p-3 rounded-lg border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-200">
                        {displayOrigin}/{linkValue}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClaimLinkForm;