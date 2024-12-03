import { Editor } from "@monaco-editor/react";
import { Code } from "@/constant";

export const EditorBack = () => {
  return (
    <div className=" w-1/3 p-2">
      <Editor
        height="100%"
        defaultLanguage="cpp"
        defaultValue={Code.trim()}
        className="h-full"
        theme="light"
      />
    </div>
  );
};
