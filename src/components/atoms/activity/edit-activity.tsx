import React from "react";
import styled from "@emotion/styled";
import { PopList } from "../popover";
import { EditText } from "../edit-text";
import { ActivityProps } from "../../../types";

const executingShadow = "0px 0px 3px 1px #555555AA";

type EditActivityProps = ActivityProps & {
  removeActivity: (options?: { variables: any }) => void;
  duplicateActivity: (options?: { variables: any }) => void;
};

export const EditActivity = ({
  exercise,
  time,
  style,
  status = "planned",
  id,
  removeActivity,
  duplicateActivity,
  editActivity
}: EditActivityProps) => {
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
        <EditText
          style={{
            fontSize: 20
          }}
          bold
          value={exercise.name}
          changeParameter={value =>
            editActivity({
              variables: {
                id,
                newParameters: { exercise: { ...exercise, name: value } }
              }
            })
          }
        ></EditText>
        <PopList
          anchorOrigin={{
            vertical: "center",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          options={["Duplicate", "Remove"]}
          optionsCall={[
            () => duplicateActivity({ variables: { id } }),
            () => removeActivity({ variables: { id } })
          ]}
        />
      </div>
      <EditText
        style={{
          padding: 10,
          fontSize: 15,
          color: "#AAAAAA"
        }}
        value={`${time}`}
        changeParameter={value =>
          editActivity({ variables: { id, newParameters: { time: value } } })
        }
      ></EditText>
    </ActivityContainer>
  );
};
