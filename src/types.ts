import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ConfirmModalContextType = {
  showConfirmModal: (options: IConfirmModalType) => void;
};

export interface IConfirmModalProviderProps {
  children: ReactNode;
}

export type IConfirmModalType = {
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
