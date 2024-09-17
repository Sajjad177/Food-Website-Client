import { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import bannerImg from "../../assets/banner-pic.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 md:p-10 lg:p-14 rounded-lg items-center justify-between gap-10 md:gap-20 m-4">
      {/* Text Section */}
      <div className="flex flex-col gap-6 md:gap-10 md:w-[50%] lg:w-[40%]">
        <div className="flex flex-col gap-3 md:gap-5">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-heading">
            Order Food anytime & anywhere
          </h1>
          <p className="text-gray-600 md:text-lg">
            Hey! Try our delicious food, we are always nearby to serve you.
          </p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            placeholder="Search restaurant by name, city & country"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg w-full"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />
          <Button
            onClick={() => navigate(`/search/${searchText}`)}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] lg:w-[60%] max-h-[500px] overflow-hidden rounded-lg shadow-lg">
        <img
          src={bannerImg}
          alt="Delicious food"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
