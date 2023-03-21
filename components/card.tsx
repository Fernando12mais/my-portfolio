import { ComponentProps } from "react";

export default function Card(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`${
        props.className || ""
      } dark:bg-slate-800 bg-slate-700 p-4 rounded `}
    >
      {props.children}
    </div>
  );
}
