import React, { ReactNode } from "react";

interface PageContainer {
  children: ReactNode;
  className: String;
}
interface Btn {
  text: String;
  color?: String;
  disabled?: Boolean;
  // All other props
  [x: string]: any;
}

const Expo = {
  PageContainer: ({ children, className = "" }: PageContainer) => (
    <div className={`${className} py-36`}>
      <div className="w-8/12 mx-auto">{children}</div>
    </div>
  ),
  Button: ({ text, color = "amber", disabled = false, ...rest }: Btn) => (
    <button
      className={css.btn(color, disabled)}
      onClick={() => console.log("TXT::-", text)}
      {...rest}
    >
      {text}
    </button>
  ),
};

const css = {
  btn: (clr: String, disabled: Boolean) =>
    `py-2 px-4 rounded-md text-${disabled ? "gray" : clr}-500 border border-${
      disabled ? "gray" : clr
    }-500 bg-transparent ${
      disabled ? "" : `hover:bg-${clr}-500 hover:text-white transition-all`
    }`,
};

export default Expo;
