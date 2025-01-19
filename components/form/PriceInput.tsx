import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { Prisma } from "@prisma/client";

// Prisma.ProductScalarFieldEnum.price
const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        min={0}
        name={name}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
};

export default PriceInput;
