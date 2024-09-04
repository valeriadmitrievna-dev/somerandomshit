import { Blockquote } from "@/shared/ui/Blockquote";
import { Button } from '@/shared/ui/Button';
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
      <div style={{ display: 'flex', gap: 16 }}>
        <Button variant="default" size="large">Button (default)</Button>
        <Button variant="default" size="medium">Button (default)</Button>
        <Button variant="default" size="small">Button (default)</Button>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Button variant="primary" size="large">Button (primary)</Button>
        <Button variant="primary" size="medium">Button (primary)</Button>
        <Button variant="primary" size="small">Button (primary)</Button>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Button variant="error" size="large">Button (error)</Button>
        <Button variant="error" size="medium">Button (error)</Button>
        <Button variant="error" size="small">Button (error)</Button>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Button variant="warning" size="large">Button (warning)</Button>
        <Button variant="warning" size="medium">Button (warning)</Button>
        <Button variant="warning" size="small">Button (warning)</Button>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Button variant="success" size="large">Button (success)</Button>
        <Button variant="success" size="medium">Button (success)</Button>
        <Button variant="success" size="small">Button (success)</Button>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Button variant="outline" size="large">Button (outline)</Button>
        <Button variant="outline" size="medium">Button (outline)</Button>
        <Button variant="outline" size="small">Button (outline)</Button>
      </div>
    </div>
  );
};

export default App;
