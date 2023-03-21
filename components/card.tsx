import { ComponentProps, forwardRef } from "react";

export default forwardRef<HTMLDivElement, ComponentProps<"div">>(function Card(
  props,
  ref
) {
  return (
    <div
      {...props}
      ref={ref}
      className={`${
        props.className || ""
      } dark:bg-slate-800 bg-slate-700 p-4 rounded `}
    >
      {props.children}
    </div>
  );
});
