import { Square, SquareCheck } from "lucide-react";
import type React from "react";

interface CheckboxProps {
  checked: boolean;
  isSub: boolean;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({ checked, isSub }) => {
  return (
    <>
      {checked ? (
        <SquareCheck
          className={`w-8 h-8 self-center shrink-0 text-green-800 ${
            isSub ? "ml-4" : ""
          }`}
        />
      ) : (
        <Square
          className={`w-8 h-8 self-center shrink-0 ${isSub ? "ml-4" : ""}`}
        />
      )}
    </>
  );
};

export default CheckboxComponent;
