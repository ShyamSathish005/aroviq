export function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <span className="text-gray-400">
                    MIT {new Date().getFullYear()} ©{' '}
                    <a 
                        href="https://aroviq.dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        Aroviq
                    </a>
                    .
                </span>
                <br />
                <span className="text-gray-500 text-sm">Trust, but Verify.</span>
            </div>
        </footer>
    )
}
