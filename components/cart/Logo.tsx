import Link from "next/link";
import { Button } from "../ui/button";
import { FaRegStar } from "react-icons/fa";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaRegStar className="h-6 w-6" />
      </Link>
    </Button>
  );
};

export default Logo;
