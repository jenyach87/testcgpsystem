export type Block = {
  id: string;
  title: string;
  icon: string;
  type?: BlockType;
  headingText?: string;
  paragraphText?: string;
  buttonText?: string;
  uploadedImage?: string;
};
export enum BlockType {
  Heading = 'heading',
  Paragraph = 'paragraph',
  Button = 'button',
  Image = 'image',
}