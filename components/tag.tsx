import { ComponentProps } from "react";

export default function Tag(props: ComponentProps<"span">) {
  return (
    <span {...props} className={`text-emerald-300 `}>
      {props.children}
    </span>
  );
}
