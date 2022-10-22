import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ConfirmModalContextType = {
  showConfirmModal: (options: IConfirmModalProps) => void;
};

export interface IConfirmModalProviderProps {
  children: ReactNode;
}

export interface IConfirmModalProps {
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText: string | undefined;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelStyle?: StyleProp<ViewStyle>;
  confirmStyle?: StyleProp<ViewStyle>;
  cancelTextStyle?: StyleProp<TextStyle>;
  confirmTextStyle?: StyleProp<TextStyle>;
}
