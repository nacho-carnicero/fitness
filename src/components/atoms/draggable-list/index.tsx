import React from "react";
import { map, flatten } from "lodash/fp";
import { Droppable, Draggable } from "react-beautiful-dnd";

const mapUncapped = map.convert({ cap: false });
type Item = React.FC;

const ItemsList = React.memo(function ItemsList({
  items,
  listId
}: {
  items: Item[];
  listId: string;
}) {
  return mapUncapped(
    (Item: React.FC, index: number) => (
      <Draggable
        draggableId={`${listId}${index}`}
        index={index}
        key={`${listId}${index}`}
      >
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {Item}
          </div>
        )}
      </Draggable>
    ),
    items
  );
});

type props = {
  listId: string;
};

export function DraggableList(props: props) {
  const items = flatten([props.children]);
  const listId = props.listId;

  return (
    <Droppable droppableId={listId}>
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <ItemsList items={items} listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
