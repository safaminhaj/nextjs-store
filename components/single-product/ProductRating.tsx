import { fetchProductRating } from "@/utils/actions";
import { FaStar } from "react-icons/fa";

const ProductRating = async ({ productId }: { productId: string }) => {
  // const rating = 4.5;
  // const count = 21;
  const { rating, count } = await fetchProductRating(productId);
  const className = "flex gap-4 items-center text-md mt-1 mb-4";
  const countValue = `(${count} review${count > 1 ? "s" : ""})`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3 " />
      {rating} {countValue}
    </span>
  );
};

export default ProductRating;
