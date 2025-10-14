import { ToastContainer } from "react-toastify";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ToastContainer limit={1} position="top-right"  autoClose={5000} theme="dark" />
            {children}
        </>
    )
}