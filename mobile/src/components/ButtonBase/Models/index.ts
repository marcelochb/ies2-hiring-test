export type ModelOfButtonBaseContainerStyle = {
  isLink?: boolean;
  isSmall?: boolean;
  isOutline?: boolean;
};

export type ModelOfButtonBase = ModelOfButtonBaseContainerStyle & {
  label?: string;
  handle: () => void;
  IconSVG?: React.FC<React.SVGProps<SVGSVGElement>>;
};
