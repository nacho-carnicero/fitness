import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Text } from "../text";
import { PopList } from "../popover";
import { ActivityProps } from "../../../types";

const executingShadow = "0px 0px 3px 1px #555555AA";

export const DisplayActivity = ({
  exercise,
  time,
  style,
  status = "planned"
}: ActivityProps) => {
  const ActivityContainer = styled.div(props => ({
    width: 300,
    height: 100,
    borderRadius: 5,
    boxShadow:
      status === "executing" ? executingShadow : "0px 0px 1px #555555AA",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    ...style
  }));

  const [completed, setCompleted] = useState(status === "finished" ? 100 : 0);
  const [timerID, setTimerID] = useState(0);

  useEffect(() => {
    function progress(timeRef) {
      setCompleted(() => {
        const diff = (Date.now() - timeRef) / 1 / time; // CHANGE 1 FOR 10 FOR REAL TIME
        return Math.min(diff, 100);
      });
    }

    if (status === "executing" && completed === 0) {
      const timeRef = Date.now();
      const timer = window.setInterval(progress, 16, timeRef);
      setTimerID(timer);

      return () => {
        clearInterval(timer);
      };
    }
  }, [status, time, completed]);

  if (completed === 100) {
    // CHANGE STATUS ////////////////////////////////////////////
    clearInterval(timerID);
  }

  return (
    <ActivityContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          margin: 10
        }}
      >
        <Text
          style={{
            fontSize: 20
          }}
          bold
        >
          {exercise.name}
        </Text>
        <PopList
          anchorOrigin={{
            vertical: "center",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          options={["Edit", "Remove", "Duplicate"]}
        />
      </div>
      <Text
        style={{
          padding: 10,
          fontSize: 15,
          color: "#AAAAAA"
        }}
      >
        {`${time} s`}
      </Text>
      {status !== "planned" && (
        <LinearProgress
          variant="determinate"
          value={completed}
          color={completed === 100 ? "primary" : "secondary"}
        />
      )}
    </ActivityContainer>
  );
};