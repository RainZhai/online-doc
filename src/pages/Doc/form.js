import React from 'react';
import { Card } from 'antd';
import { Editor, EditorState, Entity, RichUtils, getDefaultKeyBinding, KeyBindingUtil, Modifier, AtomicBlockUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import isEqual from 'lodash/isEqual';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './Form.less';

const { useState, useRef, useCallback, useEffect } = React;

function Index() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef(null);

  useEffect(() => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  }, []);

  const focus = () => {
    if (editor.current) editor.current.focus();
  };

  const handleKeyCommand = useCallback(
    (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setEditorState(newState);
        return 'handled';
      }
      return 'not-handled';
    },
    [editorState, setEditorState]
  );

  const keyBindingFn = useCallback(e => {
    if (e.keyCode === 9) {
      e.preventDefault();
      const newEditorState = RichUtils.onTab(e, editorState, 100 /* maxDepth */);
      if (!isEqual(newEditorState, editorState)) {
        setEditorState(newEditorState);
      }
      console.log(222, e, newEditorState, editorState, isEqual(newEditorState, editorState));
      return;
    }

    return getDefaultKeyBinding(e);
  });

  const blockStyleFn = useCallback(ele => {
    return ele.depth > 0 ? `TreeNode item-depth${ele.depth}` : `item-depth${ele.depth}`;
  });

  return (
    <PageHeaderWrapper>
      <Card title="基础信息" bordered={false} onClick={focus}>
        <Editor
          handleKeyCommand={handleKeyCommand}
          blockStyleFn={blockStyleFn}
          keyBindingFn={keyBindingFn}
          editorState={editorState}
          onChange={setEditorState}
          stripPastedStyles="true"
          ref={editor}
        />
      </Card>
    </PageHeaderWrapper>
  );
}

export default Index;
