interface IButton {
  text: string;
  iconRight?: string;
  iconLeft?: string;
  onClick: () => void;
  className?: string;
}

export type { IButton };
