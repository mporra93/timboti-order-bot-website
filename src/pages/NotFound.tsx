
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center max-w-md">
        <img
          src="/lovable-uploads/49a89bbb-1d97-4341-8d48-260d1d70b61a.png"
          alt="Timboti Logo"
          className="h-20 w-auto mx-auto mb-6"
        />
        <h1 className="text-6xl font-bold text-timboti-red mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Page not found
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-timboti-red hover:bg-timboti-red/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
