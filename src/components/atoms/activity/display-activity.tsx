import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Text } from "../text";
import { ActivityProps, ActivityStateTypes as ast } from "../../../types";

const executingShadow = "0px 0px 3px 1px #555555AA";
const setNextActivityQuery = gql`
  mutation {
    setNextActivity @client
  }
`;

export const DisplayActivity = ({
  exercise,
  time,
  style,
  status = ast.planned
}: ActivityProps) => {
  const ActivityContainer = styled.div(props => ({
    width: 300,
    height: 100,
    borderRadius: 5,
    boxShadow:
      status === ast.executing ? executingShadow : "0px 0px 1px #555555AA",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    ...style
  }));

  const maxScore = 100
  const [completed, setCompleted] = useState(status === ast.finished ? maxScore : 0);
  const [isFinished, setFinished] = useState(false)
  const [timeDone, setTimeDone] = useState(0)
  const [setNextActivity] = useMutation(setNextActivityQuery);

  useEffect(() => {

    function progress(timeRef) {
      const diff = Math.min((Date.now() - timeRef + timeDone) / (time * 1000), 1);
      setCompleted(maxScore * diff);
      setTimeDone(time * 1000 * diff);
    }

    if (status === ast.executing) {
      const timeRef = Date.now();
      const timer = window.setInterval(progress, 16, timeRef);

      return () => {
        clearInterval(timer);
        console.log("Interval cleared!")
      };
    }
    // eslint-disable-next-line
  }, [status]);

  if (completed === maxScore && !isFinished) {
    setFinished(true)
    setNextActivity()
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
      </div>
      <Text
        style={{
          padding: 10,
          fontSize: 15,
          color: "#AAAAAA"
        }}
      >
        {`${time}`}
      </Text>
      {completed !== 0 && (
        <LinearProgress
          variant="determinate"
          value={completed}
          color={completed === 100 ? "primary" : "secondary"}
        />
      )}
    </ActivityContainer>
  );
};