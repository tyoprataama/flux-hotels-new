import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="bg-gray-300 h-10 w-full bottom-0 left-0 dark:bg-black">
        <div className="flex container mx-auto px-4 py-2 justify-center">
          <div className="text-gray-500 dark:text-gray-300">
            <span className="font-bold text-blue-600">Flux</span>
            hotels
          </div>
          <div className="ml-3 text-gray-500 dark:text-gray-300">
            Made with 💖 by Tyo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
