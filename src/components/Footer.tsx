export default function Footer(){
    return (
        <footer className="bg-orange-200 dark:bg-gray-800 shadow-md mt-12">
            <div className="container mx-auto px-4 py-6 text-center">
                <p>&copy; {new Date().getFullYear()} Chanpech Hoeng. All rights reserved.</p>
            </div>
        </footer>
    );
}