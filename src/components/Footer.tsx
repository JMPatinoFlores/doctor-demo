export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-6 px-4 bg-blue-950 text-white text-center text-sm">
            <div className="container mx-auto">
                <p>© {currentYear} CliniCare. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
