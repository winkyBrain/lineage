import { useOnSelectionChange } from "reactflow";

export const SelectionChangeLogger = () => {
  useOnSelectionChange({
    onChange: ({ nodes, edges }) =>
      console.log("changed selection", nodes, edges)
  });

  return null;
};
