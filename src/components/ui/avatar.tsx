export interface AvatarProps {
  src: string;
}

export function Avatar({ src }: AvatarProps) {
  return (
    <div className={"h-10 w-10 overflow-hidden rounded-full"}>
      <img src={src} alt={"Avatar"} className={"h-full w-full object-cover object-center"} />
    </div>
  );
}
