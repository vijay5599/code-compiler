import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

const CodeEditor = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const onChange = React.useCallback((value: any) => {
    dispatch(updateCodeValue(value));
  }, []);

  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      theme={vscodeDark}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
