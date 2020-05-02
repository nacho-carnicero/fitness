import React from "react";
import styled from "@emotion/styled";
import { Text } from "../text";
import { PopList } from "../popover"
import LinearProgress from '@material-ui/core/LinearProgress';
import { TIMEOUT } from "dns";

type Exercise = { name: string };
export type ActivityProps = {
  exercise: Exercise;
  time: number;
  style?: any;
  status?: string;
};

const executingShadow = "0px 0px 3px 1px #555555AA";

export const Activity = ({
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

  const [completed, setCompleted] = React.useState(0);
  const [timerID, setTimerID] = React.useState(0);

  React.useEffect(() => {

    function progress(timeRef) {
      setCompleted(() => { 
        const diff = (Date.now() - timeRef) /1 / time  // CHANGE 1 FOR 10 FOR REAL TIME
        return Math.min(diff, 100);
      });
    }

    if (status === "executing" && completed === 0){
      const timeRef = Date.now()
      const timer = window.setInterval(progress, 16, timeRef); 
      setTimerID(timer)
    
      return () => {
        clearInterval(timer);
      };
    }

    
  }, []);

  if (completed === 100){
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
        < PopList 
          anchorOrigin={
            {vertical: 'center',
            horizontal: 'center'}
                  }
          transformOrigin={
            {vertical: 'top',
            horizontal: 'right'}
                  }
          options={["Edit", "Remove", "Duplicate"]} />
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
      <LinearProgress variant="determinate" value={completed} color={(completed === 0 || completed === 100)  ? 'primary' : 'secondary'} />

    </ActivityContainer>
  );
};
