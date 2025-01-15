import { FaStar } from "react-icons/fa";

const ProductRating = ({ productId }: { productId: string }) => {
  const rating = 4.5;
  const count = 21;
  const className = "flex gap-4 items-center text-md mt-1 mb-4";
  const countValue = `(${count} reviews)`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3 " />
      {rating} {countValue}
    </span>
  );
};

export default ProductRating;
