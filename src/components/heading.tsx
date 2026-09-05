import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

// interfaces are used to design what props a component will receive.
interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon; // use type any if we encounter any problems
  // to make something optional, we use ?
  iconColor?: string;
  bgColor?: string;
}

// here when you use the {} this is called deconstruction, as we learned earlier
export default function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) {
  return (
    <div>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={cn("w-10 h-10", iconColor)} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
