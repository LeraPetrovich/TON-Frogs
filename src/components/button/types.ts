interface IButton {
  text: string;
  icon?: string;
  onClick: () => void;
  className?: string;
}

export type { IButton };
