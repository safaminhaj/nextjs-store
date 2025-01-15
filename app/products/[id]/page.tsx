import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);
  const { name, image, price, company, description } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            className="w-full rounded object-cover"
            fill
            priority
            sizes="(max-widh:768 px) 100vw, (max-widh:1200 px) 50vw, 33vw"
          ></Image>
        </div>

        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 bg-muted text-md inline-block rounded p-2 ">
            {dollarsAmount}
          </p>
          <p className="text-muted-foreground mt-6  leading-8">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
