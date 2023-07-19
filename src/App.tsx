import classNames from "classnames";
import "normalize.css";
import "./App.css";
import { FullyInteractiveButton } from "./demos/fully-interactive-button";
import { modernTheme } from "./style/theme";
import { shadowTheme } from "./style/shadows";
// import { LotsOfButtons } from "./demos/lots-of-buttons";
// import { CheckableButton } from "./demos/checkable-button";

export default function App() {
  return (
    <div className={classNames(modernTheme(), shadowTheme())}>
      <Credits />
      <FullyInteractiveButton />
      {/* <LotsOfButtons /> */}
      {/* <CheckableButton /> */}
    </div>
  );
}

function Credits() {
  // sorry for the inline styles. This section is just not important enough.

  return (
    <div className="card">
      <h1>Kutner's interactive button</h1>
      <br />
      <p>
        A simple button showing full interactivity, across all states.
        <br />
        Note the automatic indicator that shows the builtin pseudo-classes using
        CSS.
      </p>
      <div>
        <img
          src="./github-mark.png"
          alt="GitHub Mark"
          width={20}
          height={20}
          style={{ verticalAlign: "middle" }}
        />{" "}
        GitHub repo{" "}
        <a href="https://github.com/KutnerUri/demo-interactions">here</a>
        <br />
        <img
          src="./medium-logo.png"
          alt="GitHub Mark"
          width={20}
          height={20}
          style={{ verticalAlign: "middle" }}
        />{" "}
        Read the full article{" "}
        <a href="https://medium.com/@urikutner/the-complete-and-simple-guide-to-interactive-element-states-8c456b1aac17">
          here
        </a>
      </div>
    </div>
  );
}
