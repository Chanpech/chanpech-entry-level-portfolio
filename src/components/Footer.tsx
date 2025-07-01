export default function Footer(){
    return (
        <footer className="bg-gradient-to-br from-orange-100 to-yellow-300 dark:bg-none dark:bg-gray-800 shadow-md mt-12">
            <div className="container mx-auto px-4 py-6 text-center">
                <p>&copy; {new Date().getFullYear()} Damian Nul. All rights reserved.</p>
            </div>
        </footer>
    );
}
//bg-gradient-to-br from-yellow-400 dark:bg-none dark:bg-gray-800 shadow-md