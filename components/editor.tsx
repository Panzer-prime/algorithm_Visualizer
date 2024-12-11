import { Editor } from "@monaco-editor/react";

export const EditorBack = ({ code }: { code : string }) => {
  return (
    <div className=" w-2/3 p-2 h-full">
      <Editor
        height="100%"
        defaultLanguage="cpp"
        defaultValue={code}
        className="h-full"
        theme="light"
      />
    </div>
  );
};
