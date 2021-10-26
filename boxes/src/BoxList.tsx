import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

interface BoxInterface {
  id: string;
  width: string;
  height: string;
  backgroundColor: string;
}

/** Renders a list of boxes
 * 
 * Props: None
 * 
 * State: array of boxes, each following the BoxInterface
 * 
 * Context: none
 */
function BoxList() { //Code review: Don't need JSX.Element
  const [boxes, setBoxes] = useState<BoxInterface[]>([]) //Code review: Don't need empty array

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: BoxInterface): void {
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
