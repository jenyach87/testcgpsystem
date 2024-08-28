import { useDispatch, useSelector } from 'react-redux';
import { moveBlock, cloneBlock, deleteBlock, setActiveBlock, updateBlockContent } from '../../redux/blockSlice';
import { Block as BlockType } from '../../types/types';
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowTop from '../../assets/arrow-top.svg';
import Copy from '../../assets/copy.svg';
import Trash from '../../assets/trash.svg';
import styles from '../Block/Block.module.css';
import { RootState } from '../../redux/store';

type BlockProps = {
  block: BlockType;
};

const Block: React.FC<BlockProps> = ({ block }) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.blocks.activeBlockId === block.id);

  const handleMoveUp = () => {
    dispatch(moveBlock({ id: block.id, direction: 'up' }));
  };

  const handleMoveDown = () => {
    dispatch(moveBlock({ id: block.id, direction: 'down' }));
  };

  const handleClone = () => {
    dispatch(cloneBlock(block.id));
  };

  const handleRemove = () => {
    dispatch(deleteBlock(block.id));
  };

  const handleClick = () => {
    dispatch(setActiveBlock(block.id));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(updateBlockContent({ id: block.id, content: { uploadedImage: reader.result as string } }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateBlockContent({ id: block.id, content: { [name]: value } }));
  };
  console.log(block.type)
  return (
    <div onClick={handleClick} className={`${styles.block} p-4 bg-white flex flex-col cursor-pointer`}>
      {isActive && (
        <div className="flex justify-end mt-2">
          <div className={styles.button__group}>
            <button onClick={handleMoveUp} className={`${styles.button} bg-blue-500 text-white p-1`}>
              <img src={ArrowTop} alt="Move Up" className="w-6 h-6" />
            </button>
            <button onClick={handleMoveDown} className={`${styles.button} bg-blue-500 text-white p-1`}>
              <img src={ArrowDown} alt="Move Down" className="w-6 h-6" />
            </button>
          </div>
          <div className={styles.button__group}>
            <button onClick={handleClone} className={`${styles.button} bg-blue-500 text-white p-1`}>
              <img src={Copy} alt="Clone" className="w-6 h-6" />
            </button>
            <button onClick={handleRemove} className={`${styles.button} bg-blue-500 text-white p-1`}>
              <img src={Trash} alt="Delete" className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
      <div className={`flex flex-col items-center ${isActive ? 'bg-blue-300 p-5 rounded' : ''}`}>
        <div className="flex flex-col justify-center items-center h-auto">
          <img src={block.icon} alt={`${block.title} icon`} className="w-6 h-6" />
          <span className="text-sm font-normal">{block.title}</span>
        </div>
        {isActive && (
          <>
            {block.type === 'heading' && (
              <input
                type="text"
                name="headingText"
                value={block.headingText || ''}
                onChange={handleInputChange}
                placeholder="Заголовок"
                className="ml-2 p-1 border rounded w-full mt-2"
              />
            )}
            {block.type === 'paragraph' && (
              <textarea
                name="paragraphText"
                value={block.paragraphText || ''}
                onChange={handleInputChange}
                placeholder="Параграф"
                className="ml-2 p-1 border rounded w-full mt-2"
              />
            )}
            {block.type === 'button' && (
              <input
                type="text"
                name="buttonText"
                value={block.buttonText || ''}
                onChange={handleInputChange}
                placeholder="Текст кнопки"
                className="ml-2 p-1 border rounded w-full mt-2"
              />
            )}
            {isActive && block.type === 'image' && (
              <input type="file" onChange={handleFileChange} className="mt-2" />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Block;
