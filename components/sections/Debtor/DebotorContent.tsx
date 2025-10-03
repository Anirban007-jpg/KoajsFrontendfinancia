import AnimatedFormDesign from "@/components/Forms/AnimatedFormDesign";
import DebotrAnimatedFormDesign from "@/components/Forms/DebtorAnimatedForm";


export default function DebtorContent() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-gradient">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <DebotrAnimatedFormDesign />
            </div>
        </main>
    )
}