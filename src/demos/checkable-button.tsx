import { useState } from "react";
import { InteractionIndicator } from "../components/interaction-indicator";
import { InteractiveButton } from "../components/interactive-button";

export function CheckableButton() {
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="card">
        <InteractiveButton
          disabled={disabled}
          onClick={() => setChecked((x) => !x)}
          on={checked}
        >
          submit
        </InteractiveButton>

        <InteractionIndicator />
      </div>
      <div className="card">
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => setDisabled((x) => !x)}
        />
        disable
      </div>
    </>
  );
}
