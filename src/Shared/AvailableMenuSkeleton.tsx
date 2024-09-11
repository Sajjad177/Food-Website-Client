import { Card, CardContent, CardFooter } from "@/components/ui/card";

const AvailableMenuSkeleton = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden animate-pulse">
          <div className="w-full h-40 bg-gray-200 dark:bg-gray-700"></div>{" "}
          {/* Skeleton for Image */}
          <CardContent className="p-4">
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-md w-3/4 mb-4"></div>{" "}
            {/* Skeleton for title */}
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-full mb-2"></div>{" "}
            {/* Skeleton for text line 1 */}
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-5/6 mb-4"></div>{" "}
            {/* Skeleton for text line 2 */}
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-md w-1/3"></div>{" "}
            {/* Skeleton for price */}
          </CardContent>
          <CardFooter className="p-4">
            <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded-md w-full"></div>{" "}
            {/* Skeleton for button */}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenuSkeleton;
