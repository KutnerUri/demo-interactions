import classNames from "classnames";
import "./App.css";
import { FullyInteractiveButton } from "./demos/fully-interactive-button";
import { modernTheme } from "./style/theme";
import { shadowTheme } from "./style/shadows";
// import { CheckableButton } from "./demos/checkable-button";

export default function App() {
  return (
    <div className={classNames(modernTheme(), shadowTheme())}>
      <FullyInteractiveButton />
      {/* <CheckableButton /> */}
    </div>
  );
}
