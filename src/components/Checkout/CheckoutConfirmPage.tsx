import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const checkOutHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API implementation here
    console.log(input);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Review Your Order</DialogTitle>
          <DialogDescription className="text-sm">
            Please review your details before proceeding to payment.
          </DialogDescription>
          <form
            onSubmit={checkOutHandler}
            className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8"
          >
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={input.name}
                name="name"
                onChange={changeEventHandler}
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                type="text"
                value={input.contact}
                name="contact"
                onChange={changeEventHandler}
                placeholder="Enter your contact number"
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="text"
                value={input.address}
                name="address"
                onChange={changeEventHandler}
                placeholder="Enter your address"
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                value={input.city}
                name="city"
                onChange={changeEventHandler}
                placeholder="Enter your city"
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                type="text"
                value={input.country}
                name="country"
                onChange={changeEventHandler}
                placeholder="Enter your country"
                className="w-full"
              />
            </div>
            <DialogFooter className="col-span-2 pt-5">
              <Button className="w-full bg-orange-400 hover:bg-orange-600">
                Continue to Payment
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CheckoutConfirmPage;
