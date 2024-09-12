import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  restaurantFormSchema,
  RestaurantFormSchema,
} from "@/Schema/restaurantSchema";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

const Restaurant = () => {
  const [input, setInput] = useState<RestaurantFormSchema>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });

  const [errors, setErrors] = useState<Partial<RestaurantFormSchema>>({});

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = restaurantFormSchema.safeParse(input);
    if (!result.success) {
      const fieldError = result.error.formErrors.fieldErrors;
      setErrors(fieldError as Partial<RestaurantFormSchema>);
      return;
    }
    // API implementation here ->
    console.log(input);
  };

  const loading = false;
  const restaurantHave = false;

  return (
    <div className="max-w-6xl mx-auto my-10 px-4 lg:px-0">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5">Add Restaurant</h1>
          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-6">
              {/* Restaurant Input field */}
              <div>
                <Label htmlFor="restaurantName">Restaurant Name</Label>
                <Input
                  id="restaurantName"
                  type="text"
                  name="restaurantName"
                  value={input.restaurantName}
                  onChange={changeEventHandler}
                  placeholder="Enter your Restaurant name"
                  className="w-full"
                />
                {errors.restaurantName && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.restaurantName}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  name="city"
                  value={input.city}
                  onChange={changeEventHandler}
                  placeholder="Enter your city"
                  className="w-full"
                />
                {errors.city && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.city}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  type="text"
                  name="country"
                  value={input.country}
                  onChange={changeEventHandler}
                  placeholder="Enter your country"
                  className="w-full"
                />
                {errors.country && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.country}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="deliveryTime">Delivery Time (minutes)</Label>
                <Input
                  id="deliveryTime"
                  type="number"
                  name="deliveryTime"
                  value={input.deliveryTime}
                  onChange={changeEventHandler}
                  placeholder="Enter your delivery time"
                  className="w-full"
                />
                {errors.deliveryTime && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.deliveryTime}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="cuisines">Cuisines</Label>
                <Input
                  id="cuisines"
                  type="text"
                  name="cuisines"
                  value={input.cuisines.join(",")}
                  onChange={(e) =>
                    setInput({ ...input, cuisines: e.target.value.split(",") })
                  }
                  placeholder="Example: pizza, beef, mutton"
                  className="w-full"
                />
                {errors.cuisines && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.cuisines}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="imageFile">Restaurant Image</Label>
                <Input
                  id="imageFile"
                  type="file"
                  name="imageFile"
                  // onChange={changeFileHandler}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0] || undefined,
                    })
                  }
                  accept="image/*"
                  className="w-full"
                />
                {errors.imageFile && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.imageFile?.name || "Image file is required"}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-6 w-fit">
              {loading ? (
                <Button
                  disabled
                  className="bg-indigo-600 text-white w-full py-2 rounded-md flex justify-center items-center"
                >
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-md transition-all"
                >
                  {restaurantHave ? "Update your restaurant" : "Add Restaurant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
