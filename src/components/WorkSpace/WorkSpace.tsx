import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Block from '../Block/Block';

const Workspace: React.FC = () => {
  const workspaceBlocks = useSelector((state: RootState) => state.blocks.workspaceBlocks);

  return (
    <div className="p-2 bg-white h-full overflow-y-auto max-w-full lg:max-w-[538px] mx-auto">
      {workspaceBlocks.map(block => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
};

export default Workspace;