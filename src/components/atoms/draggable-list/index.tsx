import React from "react";
import { map, flatten } from "lodash/fp";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const mapUncapped = map.convert({ cap: false });
type Item = React.FC;

const ItemsList = React.memo(function ItemsList({ items }: { items: Item[] }) {
  return mapUncapped(
    (Item: React.FC, index: number) => (
      <Draggable draggableId={`${index}`} index={index} key={index}>
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
          <ItemsList items={items} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
