import ButtonIcon from '../assets/Button.svg';
import HeadlineIcon from '../assets/Headline.svg';
import ImageIcon from '../assets/Image.svg';
import ParagraphIcon from '../assets/Paragraph.svg';
import { BlockType } from '../types/types';

const blocks = [
  {
    id: '1',
    title: 'Button',
    icon: ButtonIcon,
    type: BlockType.Button
  },
  {
    id: '2',
    title: 'Headline',
    icon: HeadlineIcon,
    type: BlockType.Heading
  },
  {
    id: '3',
    title: 'Image',
    icon: ImageIcon,
    type: BlockType.Image
  },
  {
    id: '4',
    title: 'Paragraph',
    icon: ParagraphIcon,
    type: BlockType.Paragraph
  },
];
export default blocks;
