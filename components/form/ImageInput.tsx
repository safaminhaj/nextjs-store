import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
const name = "image";
const ImageInput = () => {
  return (
    <div className="mb-2">
      <Label htmlFor={name}>Image</Label>
      <Input type="file" required id={name} name={name} accept="image/*" />
    </div>
  );
};

export default ImageInput;
