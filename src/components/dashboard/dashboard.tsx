import React, { CSSProperties, ReactNode, useState } from "react";
import styles from "./dashboard.module.scss";
import { accents } from "../accent";
import { StitchesButton } from "../stitches-button";
import { Label } from "../label";
// import { theme } from "../../theme";

const Card: React.FC<{
  accent?: any;
  title: string;
  status?: string;
  label?: string;
  buttonText?: string;
  gridArea: string;
  children?: ReactNode;
  style?: CSSProperties;
}> = ({
  accent,
  title,
  status,
  buttonText,
  label,
  gridArea,
  children,
  style,
}) => {
  return (
    <div
      className={[styles.card, accent].join(" ")}
      style={{ gridArea, ...style }}
    >
      {label && <Label style={{ float: "right" }}>{label}</Label>}
      <h3>{title}</h3>
      {status && <p>{status}</p>}
      {buttonText && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <StitchesButton priority="medium">{buttonText}</StitchesButton>
        </div>
      )}
      {children}
    </div>
  );
};

function Status({ intent }: { intent: "success" | "warn" | "error" }) {
  return (
    <span style={{ color: "rgb(var(--accent-color))" }}>
      {intent === "success" ? "✓" : null}
    </span>
  );
}

export const Dashboard = () => {
  const [cardStatus, setCardStatus] = useState("danger");

  return (
    <div className={styles.dashboard}>
      <Card accent={accents.success} title="Card A" gridArea="a">
        <Status intent={"success"} /> All systems operational
      </Card>

      <Card
        accent={accents.warn}
        title="Card B"
        // status="3 new notifications"
        // buttonText="Acknowledge"
        gridArea="b"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p>3 new notifications</p>
        {/* {status && <p>{status}</p>} */}
        {/* {buttonText && ( */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: " auto",
          }}
        >
          <StitchesButton priority="medium">Acknowledge</StitchesButton>
        </div>
        {/* )} */}
      </Card>

      <Card
        // theme={themes.default}
        title="Card C"
        status="Waiting for user input"
        buttonText="Proceed"
        gridArea="c"
      />

      <Card
        // @ts-ignore
        accent={accents[cardStatus]}
        title="Card D"
        label={cardStatus === "danger" ? "down" : "up"}
        gridArea="d"
      >
        {cardStatus === "danger" && <p>Error in system</p>}
        {cardStatus === "success" && <p>System operational</p>}

        {cardStatus === "danger" && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <StitchesButton onClick={() => setCardStatus("success")}>
              Fix now
            </StitchesButton>
          </div>
        )}
      </Card>

      <Card
        accent={accents.neutral}
        title="Card E"
        status="Idle system"
        buttonText="Wake Up"
        gridArea="e"
      />
    </div>
  );
};

export default Dashboard;
