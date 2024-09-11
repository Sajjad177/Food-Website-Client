import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useState } from "react";
import CheckoutConfirmPage from "../Checkout/CheckoutConfirmPage";

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);



  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant={"link"}>Clear All</Button>
      </div>
      <div>
        <Table>
          {/* table header */}
          <TableHeader>
            <TableRow>
              <TableHead>Items</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Remove</TableHead>
            </TableRow>
          </TableHeader>
          {/* table body */}
          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>Pic </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Pizza</TableCell>
              <TableCell>120</TableCell>
              <TableCell>
                <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-900 shadow-md">
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="rounded-full bg-gray-200"
                  >
                    <Minus />
                  </Button>
                  <Button
                    size={"icon"}
                    disabled
                    variant={"outline"}
                    className="font-bold border-none"
                  >
                    1
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className=" rounded-full bg-orange-400 hover:bg-orange-600"
                  >
                    <Plus />
                  </Button>
                </div>
              </TableCell>
              <TableCell>120</TableCell>
              <TableCell className="text-right">
                <Button size={"sm"} className="bg-orange-600">
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow className="text-2xl font-semibold">
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">120</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex justify-end my-5 ">
          <Button onClick={()=> setOpen(true)} className="bg-orange-400 hover:bg-orange-600">
            Proceed to Checkout
          </Button>
        </div>
      </div>
      <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;
