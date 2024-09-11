import { Card, CardContent, CardFooter } from "../ui/card";
import demo from "../../assets/banner-pic.jpg";
import { Button } from "../ui/button";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img src={demo} alt="" className="w-full h-40 object-cover" />
          <CardContent className="p-4">
            <h2 className="text-xl text-gray-800  dark:text-white">Pizza</h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, modi!
            </p>
            <h3 className="text-lg font-semibold mt-4">
              price : <span className="text-[#C7253E]">৳ 800 </span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 w-full">
              Add to Card
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
