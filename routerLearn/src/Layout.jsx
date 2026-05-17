import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/Theme";

export default function Layout() {
    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }

    // actual change in theme

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    return (
        <>
            <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
                <Navbar />
                <main className="page-container">
                    <Outlet />
                </main>
                <Footer />
            </ThemeProvider>
        </>
    )
}