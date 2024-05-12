import Navbar from "../components/Navbar";

export default function SiteLayout({ children }) {
    return (
        <main className="h-full">
            <Navbar />
            {children}
        </main>
    );
}
