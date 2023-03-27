import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ConfirmModalContextType = {
  confirm: (options: ConfirmModalType) => Promise<boolean>;
};

export interface IConfirmModalProviderProps {
  children: ReactNode;
}

export type ConfirmModalType = {
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelStyle?: StyleProp<ViewStyle>;
  confirmStyle?: StyleProp<ViewStyle>;
  cancelTextStyle?: StyleProp<TextStyle>;
  confirmTextStyle?: StyleProp<TextStyle>;
  cancelTextVisible?: boolean;
};

export interface IConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelStyle?: StyleProp<ViewStyle>;
  confirmStyle?: StyleProp<ViewStyle>;
  cancelTextStyle?: StyleProp<TextStyle>;
  confirmTextStyle?: StyleProp<TextStyle>;
  cancelTextVisible?: boolean;
}

export type ResolveRejectType = [
  (value: boolean | PromiseLike<boolean>) => void,
  (reason?: any) => void
];
