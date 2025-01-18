import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  type: string;
  defaultValue?: string;
  placeHolder?: string;
  label?: string;
};
const FormInput = ({
  name,
  type,
  defaultValue,
  placeHolder,
  label,
}: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label || name}</Label>
      <Input
        id={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormInput;
