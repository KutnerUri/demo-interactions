import { useState } from "react";
import { InteractionIndicator } from "../components/interaction-indicator";
import { InteractiveElement } from "../components/interactive";
import { modernTheme } from "../components/theme";
import { shadowTheme } from "../theme/shadows";

function CheckableButton() {
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className={[modernTheme(), shadowTheme()].join(" ")}>
      <div className="card">
        <InteractiveElement
          disabled={disabled}
          onClick={() => setChecked((x) => !x)}
          on={checked}
        >
          submit
        </InteractiveElement>

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
    </div>
  );
}
