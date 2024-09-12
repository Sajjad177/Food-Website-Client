import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MenuFromSchema, menuSchema } from "@/Schema/menuSchema";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const EditMenu = ({
  selectedMenu,
  editOpen,
  setEditOpen,
}: {
  selectedMenu: MenuFromSchema;
  editOpen: boolean;
  setEditOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState<MenuFromSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });
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
    // APi implement from there ->
    console.log(input);
  };

  useEffect(() => {
    setInput({
      name: selectedMenu?.name || "",
      description: selectedMenu?.description || "",
      price: selectedMenu?.price || 0,
      image: undefined,
    });
  }, [selectedMenu]);

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor, sit abet consectetur adipisicing edit. Magna,
            inventor.
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
                {errors.image?.name}
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
  );
};

export default EditMenu;
