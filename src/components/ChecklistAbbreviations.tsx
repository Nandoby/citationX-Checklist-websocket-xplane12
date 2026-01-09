import type React from "react";
import type { Checklist } from "../type/checklist";
import RowItem from "./RowItem";

interface Props {
  checklist: Checklist[];
  color: keyof typeof bgVariants;
  title: string;
  onToggleItem?: (index: number) => void;
}

const bgVariants = {
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
};

const textVariants = {
  amber: "text-amber-50",
  blue: "text-blue-50",
  red: "text-red-50",
  green: "text-green-50",
};

const ChecklistComponent: React.FC<Props> = ({
  checklist,
  color,
  title,
  onToggleItem,
}) => {
  return (
    <div className="break-inside-avoid mb-2">
      <h3
        className={`${bgVariants[color]} p-2 text-center font-bold text-md uppercase ${textVariants[color]} shadow-lg`}
      >
        {title}
      </h3>
      {checklist.map((checklist, idx) => (
        <RowItem
          {...checklist}
          color={color}
          key={idx}
          isSub={checklist.isSub}
          onToggle={onToggleItem ? () => onToggleItem(checklist.id) : undefined}
        />
      ))}
    </div>
  );
};

export default ChecklistComponent;
