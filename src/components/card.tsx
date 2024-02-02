import { Button } from "~/components/ui/button.tsx";

export interface CardProps {
  title: string;
  description: string;
  id: string;
  isConnected: boolean;
  onToggleConnect: () => void;
}

export function Card({ title, description, id, isConnected, onToggleConnect }: CardProps) {
  return (
    <div className={"h-full w-full space-y-2 rounded-md border border-[#C8C8C8] bg-[#FEF9F8] px-6 py-5"}>
      <div className={"flex justify-between"}>
        <img src={`/img/logos/${id}.png`} className={"h-8"} alt={`Logo for ${title}`} />
        <Button
          variant={isConnected ? "success" : "secondary"}
          size={"sm"}
          onClick={onToggleConnect}
          className={"w-24"}
        >
          {isConnected ? "Connected" : "Connect"}
        </Button>
      </div>
      <div className={"space-y-1"}>
        <p className={"font-medium"}>{title}</p>
        <p className={"text-xs"}>{description}</p>
      </div>
    </div>
  );
}
