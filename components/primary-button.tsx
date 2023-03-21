import { ComponentProps } from "react";

export default function PrimaryButton(props: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={`dark:bg-emerald-600 px-4 py-1 rounded text-slate-50 ${
        props.className || ""
      }  xl:text-4xl duration-500`}
    >
      {props.children}
    </button>
  );
}
