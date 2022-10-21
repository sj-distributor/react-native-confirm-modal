import type { StyleProp, ViewStyle } from 'react-native';

export type ConfirmModalContextType = {
  showConfirmModal: (options: IConfirmModalProps) => void;
};

export type ConfirmModalType = {
  showConfirmModal: () => void;
};

export interface IConfirmModalProviderProps {
  children: React.ReactNode;
}

export interface IConfirmModalProps {
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelStyle?: StyleProp<ViewStyle>;
  confirmStyle?: StyleProp<ViewStyle>;
}
