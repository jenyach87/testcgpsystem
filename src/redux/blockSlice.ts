import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import blocks from '../helpers/initialBlocks';
import { Block } from '../types/types';

interface BlocksState {
  blocks: Block[];
  workspaceBlocks: Block[]; 
  activeBlockId: string | null;
}

const initialState: BlocksState = {
  blocks: blocks,
  workspaceBlocks: [],
  activeBlockId: null,
};

const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<Block>) => {
      const newBlock = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.workspaceBlocks.push(newBlock);
    },
    deleteBlock: (state, action: PayloadAction<string>) => {
      state.workspaceBlocks = state.workspaceBlocks.filter(
        block => block.id !== action.payload
      );
    },
    editBlock: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const block = state.workspaceBlocks.find(block => block.id === action.payload.id);
      if (block) {
        block.title = action.payload.title;
      }
    },
    moveBlock: (state, action: PayloadAction<{ id: string; direction: 'up' | 'down' }>) => {
      const index = state.workspaceBlocks.findIndex(block => block.id === action.payload.id);
      if (index > -1) {
        const newIndex = action.payload.direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < state.workspaceBlocks.length) {
          const [movedBlock] = state.workspaceBlocks.splice(index, 1);
          state.workspaceBlocks.splice(newIndex, 0, movedBlock);
        }
      }
    },
    cloneBlock: (state, action: PayloadAction<string>) => {
      const blockToClone = state.workspaceBlocks.find(block => block.id === action.payload);
      if (blockToClone) {
        const newBlock: Block = {
          id: Date.now().toString(),
          title: blockToClone.title,
          icon: blockToClone.icon,
          headingText: blockToClone.headingText,
          paragraphText: blockToClone.paragraphText,
          buttonText: blockToClone.buttonText,
          uploadedImage: blockToClone.uploadedImage,
          type: blockToClone.type,
        };
        state.workspaceBlocks.push(newBlock);
      }
    },
    setActiveBlock: (state, action: PayloadAction<string>) => {
      state.activeBlockId = action.payload;
    },
    resetActiveBlock: (state) => {
      state.activeBlockId = null;
    },
    updateBlockContent: (state, action: PayloadAction<{ id: string; content: Partial<Block> }>) => {
      const block = state.workspaceBlocks.find(block => block.id === action.payload.id);
      if (block) {
        Object.assign(block, action.payload.content);
      }
    },
  },
});

export const {
  addBlock,
  deleteBlock,
  editBlock,
  moveBlock,
  cloneBlock,
  setActiveBlock,
  resetActiveBlock,
  updateBlockContent
} = blocksSlice.actions;

export default blocksSlice.reducer;
