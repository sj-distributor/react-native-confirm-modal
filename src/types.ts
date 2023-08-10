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

  titleStyle?: StyleProp<TextStyle>;

  cancelStyle?: StyleProp<ViewStyle>;

  confirmStyle?: StyleProp<ViewStyle>;

  containerStyle?: StyleProp<ViewStyle>;

  cancelTextStyle?: StyleProp<TextStyle>;

  confirmTextStyle?: StyleProp<TextStyle>;

  descriptionStyle?: StyleProp<TextStyle>;

  allowFontScaling?: boolean;

  cancelTextVisible?: boolean;

  modalBackgroundStyle?: StyleProp<ViewStyle>;

  buttonContainerStyle?: StyleProp<ViewStyle>;
};

export type ConfirmDialogProps = ConfirmModalType & {
  open: boolean;
};

export type ResolveRejectType = [
  (value: boolean | PromiseLike<boolean>) => void,
  (reason?: any) => void
];
