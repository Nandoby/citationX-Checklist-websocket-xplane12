import { useState } from "react";
import type { Checklist } from "./type/checklist";
import {
  checklistAbbreviationsData,
  preliminaryCockpitChecklistData,
  exteriorCabinInspection,
  cockpitPreparation,
  preflightProcedure,
  engineStart,
} from "./data/checklist";
import ChecklistComponent from "./components/ChecklistAbbreviations";
import { Check } from "lucide-react";

type ListName =
  | "preliminary"
  | "exteriorCabin"
  | "cockpitPreparation"
  | "preflightProcedure"
  | "engineStart";

const App = () => {
  const [step, setStep] = useState<number>(1);

  const [checklistsOrder, setChecklistOrder] = useState([
    "Preliminary Cockpit Preparation",
    "Exterior & Cabin Inspection",
    "Cockpit Preparation",
    "Preflight Procedure",
    "Engine Start",
  ]);

  const [showAbbreviation, setShowAbbreviation] = useState<boolean>(false);

  const [checklistAbbreviation] = useState<Checklist[]>(
    checklistAbbreviationsData
  );
  const [preliminaryCockpitChecklist, setPreliminaryCockpitChecklist] =
    useState<Checklist[]>(() =>
      preliminaryCockpitChecklistData.map((item) => ({
        ...item,
        checked: false,
      }))
    );

  const [extCabinCheck, setExtCabinCheck] = useState<Checklist[]>(
    exteriorCabinInspection
  );

  const [cockpitPreparationCheck, setCockpitPreparationCheck] =
    useState<Checklist[]>(cockpitPreparation);

  const [preflightProcCheck, setPreflightProcCheck] =
    useState<Checklist[]>(preflightProcedure);

  const [engineStartCheck, setEngineStartCheck] =
    useState<Checklist[]>(engineStart);

  const toggleItem = (listName: ListName, id: number) => {
    const listSetters: Record<
      ListName,
      React.Dispatch<React.SetStateAction<Checklist[]>>
    > = {
      preliminary: setPreliminaryCockpitChecklist,
      exteriorCabin: setExtCabinCheck,
      cockpitPreparation: setCockpitPreparationCheck,
      preflightProcedure: setPreflightProcCheck,
      engineStart: setEngineStartCheck,
    };

    const setter = listSetters[listName];

    if (setter) {
      setter((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                checked: !item.checked,
                nbOfChecked: prev.filter((value) => value.checked).length,
              }
            : item
        )
      );
    }
  };

  const handleClickPrevious = () => {
    setStep((prev) => (prev === 1 ? 1 : (prev = prev - 1)));
  };

  const handleClickNext = () => {
    const maxStep = checklistsOrder.length;
    setStep((prev) => (prev === maxStep ? (prev = maxStep) : prev + 1));
  };

  const getCheckedCount = (list: Checklist[]) =>
    list.filter((item) => item.checked).length;

  const getTotalCheck = (list: Checklist[]) =>
    list.filter((item) => !item.subtitle).length;

  const counts: Record<number, number> = {
    1: getCheckedCount(preliminaryCockpitChecklist),
    2: getCheckedCount(extCabinCheck),
    3: getCheckedCount(cockpitPreparationCheck),
    4: getCheckedCount(preflightProcCheck),
    5: getCheckedCount(engineStartCheck),
  };

  const totalOfChecks: Record<number, number> = {
    1: getTotalCheck(preliminaryCockpitChecklist),
    2: getTotalCheck(extCabinCheck),
    3: getTotalCheck(cockpitPreparationCheck),
    4: getTotalCheck(preflightProcCheck),
    5: getTotalCheck(engineStartCheck),
  };

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
          </div>
          <div>
            <button
              onClick={() => setShowAbbreviation(!showAbbreviation)}
              className="btn btn-primary"
            >
              {showAbbreviation ? "Hide Abbreviation" : "Show Abbreviation"}
            </button>
          </div>
        </div>

        <div className="mt-3 max-w-7xl mx-auto flex">
          <div className="bg-slate-800 text-slate-200 p-4 flex flex-col gap-2 sticky top-6 w-lg h-fit mr-2">
            {checklistsOrder.map((check, index) => {
              const stepNumber = index + 1;
              return (
                <button
                  onClick={() => setStep(stepNumber)}
                  className={`btn ${
                    stepNumber === step ? "btn-active" : "btn-primary"
                  } justify-between`}
                >
                  {stepNumber} - {check}{" "}
                  <span className="badge badge-accent">
                    {counts[stepNumber] === totalOfChecks[stepNumber] ? (
                      <>
                        <Check className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        {counts[stepNumber]} / {totalOfChecks[stepNumber]}
                      </>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex-1 max-w-4xl ml-auto">
            {showAbbreviation && (
              <ChecklistComponent
                checklist={checklistAbbreviation}
                color="amber"
                title="Checklist Abbreviation"
              />
            )}

            {/* Checklist Preliminary Cockpit Checklist */}
            {step === 1 && (
              <ChecklistComponent
                checklist={preliminaryCockpitChecklist}
                color="blue"
                title="Preliminary Cockpit Preparation"
                onToggleItem={(id) => toggleItem("preliminary", id)}
              />
            )}
            {/* Checklist Exterior Cabin */}
            {step === 2 && (
              <ChecklistComponent
                checklist={extCabinCheck}
                color="blue"
                title="Exterior & Cabin Inspection"
                onToggleItem={(id) => toggleItem("exteriorCabin", id)}
              />
            )}

            {/* Checklist Cockpit preparation */}
            {step === 3 && (
              <ChecklistComponent
                checklist={cockpitPreparationCheck}
                color="blue"
                title="Cockpit Preparation"
                onToggleItem={(id) => toggleItem("cockpitPreparation", id)}
              />
            )}

            {step === 4 && (
              <ChecklistComponent
                checklist={preflightProcCheck}
                color="blue"
                title="Preflight Procedure"
                onToggleItem={(id) => toggleItem("preflightProcedure", id)}
              />
            )}

            {step === 5 && (
              <ChecklistComponent
                checklist={engineStartCheck}
                color="blue"
                title="Engine Start"
                onToggleItem={(id) => toggleItem("engineStart", id)}
              />
            )}

            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleClickPrevious()}
                className="btn btn-primary flex-1"
                disabled={step === 1}
              >
                Previous
              </button>
              <button
                onClick={() => handleClickNext()}
                className="btn btn-primary flex-1"
                disabled={step === checklistsOrder.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
