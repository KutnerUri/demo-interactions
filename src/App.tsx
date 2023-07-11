import classNames from "classnames";
import "./App.css";
import { FullyInteractiveButton } from "./demos/fully-interactive-button";
import { modernTheme } from "./components/theme";
import { shadowTheme } from "./theme/shadows";
// import { CheckableButton } from "./demos/checkable-button";

export default function App() {
  return (
    <div className={classNames(modernTheme(), shadowTheme())}>
      <FullyInteractiveButton />
      {/* <CheckableButton /> */}
    </div>
  );
}
