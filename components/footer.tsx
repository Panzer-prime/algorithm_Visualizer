import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const navigateToVisualizer = () => {
    router.push("/visualizer"); // Adjust path if needed
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold">Backtracking Visualizer</h3>
            <p className="mt-2 text-sm text-gray-400">
              Explore and visualize the power of backtracking algorithms in
              solving complex problems.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex justify-center">
            <button
              onClick={navigateToVisualizer}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
            >
              Go to Visualizer
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 Backtracking Visualizer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
