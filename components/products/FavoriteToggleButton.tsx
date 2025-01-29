import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { fetchFavoriteId } from "@/utils/actions";

const FavoriteToggleButton = async ({ productId }: { productId: string }) => {
  const user = auth();
  if (!user) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ productId });
  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
};

export default FavoriteToggleButton;
