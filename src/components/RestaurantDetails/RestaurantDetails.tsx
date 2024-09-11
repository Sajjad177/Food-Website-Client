import { Timer } from "lucide-react";
import demo from "../../assets/menu.jpg";
import { Badge } from "../ui/badge";
import AvailableMenu from "../Menu/AvailableMenu";

const RestaurantDetails = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="relative w-full h-32 md:64 lg:h-80">
          <img
            src={demo}
            alt=""
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">Pizza hot</h1>
            <div className="flex gap-2 my-2">
              {["pizza", "coffee"].map((cuisine: string, idx: number) => (
                <Badge key={idx}>{cuisine}</Badge>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h3 className="flex items-center gap-2 font-medium">
                  Delivery Time :{" "}
                  <span className="text-[#C7253E]">30 minutes</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* display menu */}
        <AvailableMenu/>
      </div>
    </div>
  );
};

export default RestaurantDetails;

//! start 4.42.33
