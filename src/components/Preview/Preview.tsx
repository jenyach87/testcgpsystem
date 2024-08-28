import { useSelector } from "react-redux";
import { Block } from "../../types/types";
import { RootState } from "../../redux/store";

const Preview: React.FC = () => {
  const workspaceBlocks = useSelector((state: RootState) => state.blocks.workspaceBlocks);

  return (
    <div className="flex flex-col justify-start items-center max-w-full p-2 bg-white w-full h-full overflow-y-auto">
      {workspaceBlocks.map((block: Block) => (
        <div key={block.id} className="mb-2 p-2 w-full flex flex-col justify-center items-center">
          {block.headingText && <h1 className="text-2xl font-bold mb-2">{block.headingText}</h1>}
          {block.paragraphText && <p className="text-base mb-2">{block.paragraphText}</p>}
          {block.uploadedImage && (
            <img src={block.uploadedImage} alt="Uploaded" className="w-full h-auto mb-2" />
          )}
          {block.buttonText && (
            <button className="bg-blue-500 text-white p-2 rounded">{block.buttonText}</button>
          )}
        </div>
      ))}
    </div>
  );
};
export default Preview;