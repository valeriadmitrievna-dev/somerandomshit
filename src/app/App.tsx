import { Blockquote } from "@/shared/ui/Blockquote";
import { FC } from "react";

const App: FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Blockquote>
        After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege.
      </Blockquote>
    </div>
  );
};

export default App;
