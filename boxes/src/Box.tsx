/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */
interface BoxInterface {
  id: string;
  width: string;
  height: string;
  backgroundColor: string;
}

interface BoxProps extends BoxInterface {
  remove: (id: string) => void
}

/** Renders an individual box
 * 
 * Props: id, width, height, backgroundColor, remove()
 * 
 * State: none
 * 
 * Context: none
 */
function Box({ id, width = "5", height = "5", backgroundColor, remove }: BoxProps) {

  /** Remove a box. */
  function handleRemove(): void {
    remove(id);
  }

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
      <button
        className="Box-removeBtn"
        onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
