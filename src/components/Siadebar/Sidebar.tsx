import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock } from '../../redux/blockSlice';
import { RootState } from '../../redux/store';
import { Block } from '../../types/types';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const blocks = useSelector((state: RootState) => state.blocks.blocks);

  const handleAddBlock = (block: Block) => {
    dispatch(addBlock(block));
    console.log("handleAddBlock", block);
  };

  return (
    <div className=" p-4 h-full w-full sm:w-auto max-w-full lg:max-w-[270px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center h-auto">
        {blocks.map(block => (
          <div
            key={block.id}
            onClick={() => handleAddBlock(block)}
            className="flex flex-col justify-center items-center cursor-pointer bg-[#F6F9FE] max-w-[100px] max-h-[83px] p-2"
          >
            <img src={block.icon} alt={`${block.title} icon`} className="w-6 h-6" />
            <span className="text-sm font-normal">{block.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
