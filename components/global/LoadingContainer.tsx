import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingContainer = () => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="w-full h-48" />
        <Skeleton className="w-3/4 h-4 mt-4" />
        <Skeleton className="w-1/2 h-4 mt-2" />
      </CardContent>
    </Card>
  );
}

export default LoadingContainer;
