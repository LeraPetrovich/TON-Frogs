interface IButton {
  text: string;
  iconRight?: string;
  iconLeft?: string;
  onClick: () => void;
  className?: string;
  message?: boolean;
}

export type { IButton };
