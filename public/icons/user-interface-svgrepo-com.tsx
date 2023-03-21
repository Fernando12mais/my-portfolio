import { ComponentProps } from "react";

export default function InterfaceIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#EBEDEE"
        d="M4 0h92a4 4 0 0 1 4 4v92a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
      />
      <path fill="#ffffff" d="M10 20h80v70H10V20z" />
      <path fill="#E74C3C" d="M13 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      <path fill="#F39C12" d="M23 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      <path fill="#17A085" d="M33 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      <path fill="#ffffff" d="M45 7h45v6H45V7z" />
      <path
        fill="#BDC3C7"
        d="M20 45v5h25v-5H20zm0 15h25v-5H20v5zm0 10h25v-5H20v5zm0 10h25v-5H20v5z"
      />
      <path fill="#1ABC9C" d="M20 30h60v10H20V30z" />
      <path fill="#BDC3C7" d="M50 45v15h30V45H50zm0 35h30V65H50v15z" />
    </svg>
  );
}
