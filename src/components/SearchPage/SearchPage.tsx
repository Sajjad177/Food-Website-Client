import { Link, useParams } from "react-router-dom";
import FilterSection from "./FilterSection";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { GlobeIcon, MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import demo from "../../assets/banner-pic.jpg";

const SearchPage = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const selectedFilters = ["Pizza", "Burger", "Sushi"]; // Example of selected filters

  // Mock search result count (you should dynamically fetch or calculate this)
  const searchResultsCount = 2;

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* side filter section */}
        <FilterSection />

        <div className="flex-1">
          {/* search input field */}
          <div className="flex items-center gap-1">
            <Input
              type="text"
              placeholder="Search by restaurant & cuisines"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Search
            </Button>
          </div>

          {/* search result display */}
          <div className="mt-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
              <h3 className="font-medium text-lg text-gray-500">
                ({searchResultsCount}) Search result(s) found
              </h3>

              {/* Display selected filters */}
              <div className="flex flex-wrap mb-4 md:mb-0 gap-2">
                {selectedFilters.map((selectedFilter: string, idx: number) => (
                  <div
                    key={idx}
                    className="relative inline-flex items-center max-w-full"
                  >
                    <Badge
                      className="text-[#EF5A6F] rounded-md pr-6 hover:cursor-pointer  whitespace-nowrap"
                      variant={"outline"}
                    >
                      {selectedFilter}
                    </Badge>
                    <X
                      size={16}
                      className="absolute text-[#EF5A6F] right-1 hover:cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Restaurant card show there */}
            <div>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <AspectRatio ratio={16 / 6}>
                      <img
                        src={demo}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 opacity-75 rounded-lg px-3 py-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                      Hot Pizza{" "}
                    </h2>
                    <div className="mt-2 gap-1 flex text-gray-600 dark:text-gray-200">
                      <MapPin size={16} />
                      <p className="text-sm">
                        City: <span className="font-medium">Bogura</span>
                      </p>
                    </div>
                    <div className="mt-2 gap-1 flex text-gray-600 dark:text-gray-200">
                      <GlobeIcon size={16} />
                      <p className="text-sm">
                        Country: <span className="font-medium">Bangladesh</span>
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {selectedFilters.map(
                        (selectedFilter: string, idx: number) => (
                          <div
                            key={idx}
                            className="relative inline-flex items-center max-w-full"
                          >
                            <Badge
                              className="text-[#EF5A6F] rounded-md  hover:cursor-pointer  whitespace-nowrap"
                              variant={"outline"}
                            >
                              {selectedFilter}
                            </Badge>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 border-t dark:border-t-gray-100 text-white flex justify-end">
                    <Link to={`/restaurant/${123}`}>
                      <Button className="bg-indigo-600 hover:bg-indigo-700 font-semibold py-2 px-4 shadow-md rounded-full transition-colors duration-200">
                        View Menu
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
