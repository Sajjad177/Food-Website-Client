import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import demo from "@/assets/banner-pic.jpg";
import EditMenu from "../EditMenu/EditMenu";
import { MenuFromSchema, menuSchema } from "@/Schema/menuSchema";

const menus = [
  {
    name: "pizza",
    description:
      "Lorem ipsum dolor sit abet consectetur adipisicing edit. Maxim!",
    price: 120,
    image: demo,
  },
  {
    name: "Beef",
    description:
      "Lorem ipsum dolor sit abet consectetur adipisicing edit. Maxim!",
    price: 1020,
    image: demo,
  },
  {
    name: "Ice-Cream",
    description:
      "Lorem ipsum dolor sit abet consectetur adipisicing edit. Maxim!",
    price: 420,
    image: demo,
  },
];

const AddMenu = () => {
  const [input, setInput] = useState<MenuFromSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });

  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [errors, setErrors] = useState<Partial<MenuFromSchema>>({});

  const loading = false;

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = menuSchema.safeParse(input);
    if (!result.success) {
      const fieldError = result.error.formErrors.fieldErrors;
      setErrors(fieldError as Partial<MenuFromSchema>);
      return;
    }
    // api implements there
    console.log(input);
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menus
        </h1>
        {/* Dialog is there */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button className="bg-orange-500 hover:bg-orange-700">
              <Plus className="mr-2" />
              Add Menu
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Menu</DialogTitle>
              <DialogDescription>
                Add details about the new menu item.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  placeholder="Enter menu name"
                />
                {errors.name && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.name}
                  </span>
                )}
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Enter menu description"
                />
                {errors.description && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.description}
                  </span>
                )}
              </div>
              <div>
                <Label>Price in (tk)</Label>
                <Input
                  type="number"
                  name="price"
                  value={input.price}
                  onChange={changeEventHandler}
                  placeholder="Enter menu price"
                />
                {errors.price && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.price}
                  </span>
                )}
              </div>
              <div>
                <Label>Menu Image</Label>
                <Input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      image: e.target.files?.[0] || undefined,
                    })
                  }
                  accept="image/*"
                />
                {errors.image && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.image?.name || "Image is Required"}
                  </span>
                )}
              </div>
              <DialogFooter className="mt-2">
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
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Display menu */}
      <div className="mt-6 space-y-4">
        {menus.map((menu: any, idx: number) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border"
          >
            <img
              src={menu.image || demo} // Use menu's image or default demo
              alt={menu.name}
              className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800">
                {menu.name}
              </h1>
              <p className="text-sm text-gray-600 mt-1">{menu.description}</p>
              <h2 className="font-semibold mt-2">
                Price: <span className="text-[#C7253E]">{menu.price}</span>
              </h2>
            </div>
            <div>
              <Button
                onClick={() => {
                  setSelectedMenu(menu);
                  setEditOpen(true);
                }}
                size={"sm"}
                className="bg-indigo-600 hover:bg-indigo-700 mt-2"
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Menu edit modal */}
      <EditMenu
        selectedMenu={selectedMenu}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
      />
    </div>
  );
};

export default AddMenu;
