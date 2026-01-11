import type React from "react";
import type { Data } from "../data/checklist";
import CheckboxComponent from "./CheckboxComponent";
import { CircleQuestionMark } from "lucide-react";

interface Props extends Data {
  left: string;
  right: string;
  color: keyof typeof colors;
  subtitle?: string;
  onToggle?: () => void;
}

const colors = {
  amber: "text-amber-500",
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-500",
};

const colorsChecked = {
  amber: "text-amber-300",
  blue: "text-blue-300",
  red: "text-red-300",
  green: "text-green-300",
};

const RowItem: React.FC<Props> = ({
  color,
  left,
  right,
  subtitle,
  isSub = false,
  checked,
  onToggle,
  tooltip,
}) => {
  const handleClick = () => {
    if (!subtitle && onToggle) {
      onToggle();
    }
  };

  return (
    <div
      className={`flex items-baseline *:p-2 text-sm  select-none  ${
        subtitle
          ? "flex-wrap cursor-default"
          : "flex-nowrap hover:bg-slate-200 cursor-pointer"
      } ${
        checked && !subtitle
          ? "line-through bg-slate-300 text-slate-400"
          : "bg-slate-100 text-slate-600"
      }`}
      onClick={handleClick}
    >
      {subtitle ? (
        <>
          <span className="w-full text-slate-600 font-medium bg-blue-200/50 uppercase">
            {subtitle}
            {tooltip && (
              <div className="tooltip self-center" data-tip={tooltip}>
                <CircleQuestionMark className="w-3.5 h-3.5 text-amber-700 ml-3 hover:text-amber-500" />
              </div>
            )}
          </span>
        </>
      ) : (
        <>
          {onToggle && (
            <CheckboxComponent checked={checked || false} isSub={isSub} />
          )}
          <span className={`font-medium uppercase`}>{left}</span>
          <span className="border-b-2 border-dotted flex-1"></span>
          <span
            className={`${
              !checked ? colors[color] : colorsChecked[color]
            } font-bold uppercase text-nowrap`}
          >
            {right}
          </span>
          {tooltip && (
            <div className="tooltip" data-tip={tooltip}>
              <CircleQuestionMark className="w-3.5 h-3.5 text-amber-700 -ml-3 hover:text-amber-500" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RowItem;
