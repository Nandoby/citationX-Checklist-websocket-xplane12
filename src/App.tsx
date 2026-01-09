import { useState } from "react";
import type { Checklist } from "./type/checklist";
import {
  preliminaryCockpitChecklistData,
  exteriorCabinInspection,
  cockpitPreparation,
  preflightProcedure,
  engineStart,
} from "./data/checklist";
import ChecklistComponent from "./components/ChecklistAbbreviations";
import { Check } from "lucide-react";
import { useXPlane } from "./hooks/useXplane";

const DATAREFS = ["sim/cockpit2/controls/parking_brake_ratio"]

const App = () => {

  const data = useXPlane(DATAREFS)

  console.log(data)

  const CHECKLIST_CONFIG = [
    {
      id: "preliminary",
      title: "Preliminary Cockpit Preparation",
      data: preliminaryCockpitChecklistData,
    },
    {
      id: "exteriorCabin",
      title: "Exterior & Cabin Inspection",
      data: exteriorCabinInspection,
    },
    {
      id: "cockpitPreparation",
      title: "Cockpit Preparation",
      data: cockpitPreparation,
    },
    {
      id: "preflightProcedure",
      title: "Preflight Procedure",
      data: preflightProcedure,
    },
    { id: "engineStart", title: "Engine Start", data: engineStart },
  ];

  const [step, setStep] = useState<number>(1);

  const [checklists, setChecklists] = useState(() => {
    const initialState: Record<string, Checklist[]> = {};
    CHECKLIST_CONFIG.forEach((config) => {
      initialState[config.id] = config.data.map((item) => ({
        ...item,
        checked: false,
      }));
    });
    return initialState;
  });

  const toggleItem = (listId: string, itemId: number) => {
    setChecklists((prev) => ({
      ...prev,
      [listId]: prev[listId].map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  const getStats = (listId: string) => {
    const list = checklists[listId];
    return {
      checked: list.filter((i) => i.checked).length,
      total: list.filter((i) => !i.subtitle).length,
    };
  };

  const allItems = Object.values(checklists).flat();
  const totalChecked = allItems.filter((i) => i.checked).length;
  const totalToCheck = allItems.filter((i) => !i.subtitle).length;
  const progression = Math.round((totalChecked / totalToCheck) * 100);

  return (
    <div className="min-h-screen bg-slate-400 p-0.5">
      <div className="max-w-7xl mx-auto mt-6">
        <div className="bg-slate-800 p-4 rounded-t-2xl flex justify-between items-center">
          <div>
            <h3 className="text-white font-bold text-3xl uppercase">
              Cessna Citation X (C750)
            </h3>
            <p className="text-slate-400 text-md uppercase">
              Quick ref. Checklist
            </p>
            <div className="w-full bg-slate-700 h-2 rounded-full mt-4">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progression}%` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-1 text-right">
              {progression}% Ready
            </p>
          </div>
        </div>

        <div className="mt-3 max-w-7xl mx-auto flex">
          <div className="bg-slate-800 text-slate-200 p-4 flex flex-col gap-2 sticky top-6 w-lg h-fit mr-2">
            {CHECKLIST_CONFIG.map((config, index) => {
              const stepNumber = index + 1;
              const { checked, total } = getStats(config.id);
              return (
                <button
                  key={config.id}
                  onClick={() => setStep(stepNumber)}
                  className={`btn justify-between ${
                    step === stepNumber ? "btn-active" : "btn-primary"
                  }`}
                >
                  {stepNumber} - {config.title}
                  <span className="badge badge-secondary">
                    {checked === total ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      `${checked}/${total}`
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex-1 max-w-4xl ml-auto">
            {CHECKLIST_CONFIG.map(
              (config, index) =>
                step === index + 1 && (
                  <ChecklistComponent
                    key={config.id}
                    checklist={checklists[config.id]}
                    color="blue"
                    title={config.title}
                    onToggleItem={(id) => toggleItem(config.id, id)}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
