import { InteractiveButton } from "../components/interactive-button";

export function LotsOfButtons() {
  return (
    <>
      <div className="card">
        <InteractiveButton>resting</InteractiveButton>
        <InteractiveButton>hover</InteractiveButton>
        <InteractiveButton>active</InteractiveButton>
        <InteractiveButton>focused</InteractiveButton>
        <InteractiveButton>disabled</InteractiveButton>
        <InteractiveButton loading={true}>loading</InteractiveButton>
        <InteractiveButton loading="success">done</InteractiveButton>
        <InteractiveButton loading="error">err</InteractiveButton>
        <InteractiveButton on={true}>checked</InteractiveButton>
        <InteractiveButton on={false}>checked</InteractiveButton>
      </div>
    </>
  );
}
