import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const CardSkeleton = () => {
  return (
    <div>
      {[...Array(3)].map((index) => (
        <Card
          key={index}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-pulse"
        >
          <div className="relative">
            <AspectRatio ratio={16 / 6}>
              <div className="bg-gray-200 dark:bg-gray-700 w-full h-full"></div>
            </AspectRatio>
            <div className="absolute top-2 left-2 bg-gray-300 dark:bg-gray-600 rounded-lg px-3 py-1">
              <span className="text-sm font-medium text-transparent">
                Featured
              </span>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4"></div>
            <div className="mt-2 gap-1 flex">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-1/2"></div>
            </div>
            <div className="mt-2 gap-1 flex">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-1/2"></div>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-16"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-16"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-16"></div>
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t dark:border-t-gray-600 flex justify-end">
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-full w-24"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardSkeleton;
