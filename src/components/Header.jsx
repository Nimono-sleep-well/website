import React, { useState, useEffect } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        // 初期状態もチェック
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showHeader) return null;
    return (
        <header
            className={`bg-zinc-900 py-6 px-8 flex items-center justify-between shadow-lg fixed top-0 left-0 w-full z-[9999] transition-transform duration-500 ${
                showHeader ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="flex items-center gap-10">
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 z-20"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="メニューを開く"
                >
                    <span className={`block w-7 h-1 bg-cyan-400 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-7 h-1 bg-cyan-400 rounded my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-7 h-1 bg-cyan-400 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
                <a href="">
                    <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_cyan] tracking-widest">
                        Nimono
                    </h1>
                </a>
            </div>
            {/* PC用ナビゲーション */}
            <nav className="hidden md:flex gap-8">
                <a
                    href="#about"
                    className="text-gray-200 font-medium transition duration-200 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan]"
                >
                    About
                </a>
                <a
                    href="#works"
                    className="text-gray-200 font-medium transition duration-200 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan]"
                >
                    Works
                </a>
                <a
                    href="#contact"
                    className="text-gray-200 font-medium transition duration-200 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan]"
                >
                    Contact
                </a>
            </nav>
            {/* モバイルメニュー */}
            {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-zinc-900 flex flex-col items-center gap-6 py-8 shadow-lg md:hidden z-10">
                    <a
                        href="#About"
                        className="text-gray-200 font-medium text-xl transition duration-200 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan]"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#works"
                        className="text-gray-200 font-medium text-xl transition duration-200 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Works
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-200 font-medium text-xl transition duration-200 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;