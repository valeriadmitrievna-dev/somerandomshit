import { Blockquote } from "@/shared/ui/Blockquote";
import { Code } from "@/shared/ui/Code";
import { FC } from "react";

const App: FC = () => {
  return (
    <div
      style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}
    >
      <Blockquote>
        After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege.
      </Blockquote>
      <Code>npm install classnames</Code>
      <p>
        Take advantage of simple, scalable pipelines and <Code inline>CI/CD</Code> enabled features.
        You can view integration results, security scans, tests, code coverage
        and more directly in merge requests!
      </p>
    </div>
  );
};

export default App;
