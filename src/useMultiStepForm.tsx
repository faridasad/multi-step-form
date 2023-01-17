import { ReactElement, useState } from "react";


export function useMultiStepForm(steps: ReactElement[]) {
  const [stepIndex, setStepIndex] = useState(0);

  const next = () => {
    setStepIndex((i) => {
      return i >= steps.length - 1 ? i : i + 1;
    });
  };

  const prev = () => {
    setStepIndex((i) => {
      return i <= 0 ? i : i - 1;
    });
  };

  return { stepIndex, next, prev, step: steps[stepIndex], title: steps[stepIndex].props.title };
}
