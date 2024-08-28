import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Block from '../Block/Block';

const Workspace: React.FC = () => {
  const workspaceBlocks = useSelector((state: RootState) => state.blocks.workspaceBlocks);

  return (
    <div className="p-2 bg-[#F5F5FC] h-full overflow-y-auto max-w-full lg:max-w-[538px] mx-auto gap-4 flex flex-col">
      {workspaceBlocks.map(block => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
};

export default Workspace;