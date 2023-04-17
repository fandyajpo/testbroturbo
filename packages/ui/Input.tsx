import { forwardRef, HTMLProps } from "react";

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  (props, ref) => {
    return <input className="border border-gray-300" />;
  }
);

export { Input };
