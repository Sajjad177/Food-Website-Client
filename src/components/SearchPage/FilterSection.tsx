import { FilterOptionState } from "@/Type";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const filterOptions: FilterOptionState[] = [
  {
    id: "pizza",
    label: "pizza",
  },
  {
    id: "burger",
    label: "burger",
  },
  {
    id: "Ice-Cream",
    label: "Ice-Cream",
  },
  {
    id: "sea-food",
    label: "sea-food",
  },
];

const FilterSection = () => {
  const filterHandler = (value: string) => {
    // api implement there
  };

  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg">Filter By Items</h3>
        <Button variant={"link"}>Reset</Button>
      </div>
      {filterOptions.map((option) => (
        <div key={option.id} className="flex items-center space-x-2 my-4">
          <Checkbox
            id={option.id}
            onClick={() => filterHandler(option.label)}
          />
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
