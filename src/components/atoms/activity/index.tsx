import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Text } from "../text";
import { PopList } from "../popover"

type Exercise = { name: string };
export type ActivityProps = {
  exercise: Exercise;
  time: number;
  style?: any;
  status?: "planned" | "executing" | "finished";
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
  ////////////
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ////////////
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
        <button
          style={{
            width: 30,
            height: 0.75 * 30,
            borderRadius: 5
          }}
          onClick={(event) => handleClick(event)}
        >
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
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
      < PopList
        anchorEl={anchorEl}
        handleClose={handleClose} />
    </ActivityContainer>
  );
};
