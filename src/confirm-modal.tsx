import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  View,
  Modal as RNModal,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Styles from './style';
import type { ConfirmModalType, IConfirmModalProps } from './types';

const ConfirmModal = forwardRef<ConfirmModalType>((_, ref) => {
  const [options, setOptions] = useState<IConfirmModalProps>({});

  const {
    title,
    description,
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    onCancel,
    onConfirm,
    cancelStyle,
    confirmStyle,
    cancelTextStyle,
    confirmTextStyle,
  } = useMemo(() => options, [options]);

  useImperativeHandle(ref, () => ({
    showConfirmModal,
  }));

  const styles = useRef(Styles()).current;

  const [open, setOpen] = useState<boolean>(false);

  const showConfirmModal = (overrideOptions: IConfirmModalProps) => {
    setOptions({ ...overrideOptions });

    setOpen(true);
  };

  const _onCancel = () => {
    setOpen(false);

    onCancel && onCancel();
  };

  const _onConfirm = () => {
    setOpen(false);

    onConfirm && onConfirm();
  };

  const borderRightWidthStyle = useMemo(
    (): StyleProp<ViewStyle> => ({
      borderRightWidth:
        cancelText && confirmText ? StyleSheet.hairlineWidth : 0,
    }),
    [cancelText, confirmText]
  );

  return (
    <View style={styles.flexContainer}>
      <RNModal transparent visible={open} animationType={'none'}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            {!!title && <Text style={styles.titleStyle}>{title}</Text>}

            {!!description && (
              <Text style={styles.descriptionStyle}>{description}</Text>
            )}
            <View style={styles.buttonStyle}>
              {cancelText && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={_onCancel}
                  style={[
                    styles.button,
                    styles.cancelButtonStyle,
                    borderRightWidthStyle,
                    cancelStyle,
                  ]}
                >
                  <Text
                    style={[
                      styles.textStyle,
                      styles.cancelButtonStyle,
                      cancelTextStyle,
                    ]}
                  >
                    {cancelText}
                  </Text>
                </TouchableOpacity>
              )}

              {confirmText && (
                <TouchableOpacity
                  style={[
                    styles.button,
                    styles.confirmButtonStyle,
                    confirmStyle,
                  ]}
                  onPress={_onConfirm}
                >
                  <Text
                    style={[
                      styles.textStyle,
                      styles.confirmButtonStyle,
                      confirmTextStyle,
                    ]}
                  >
                    {confirmText}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </RNModal>
    </View>
  );
});

export default ConfirmModal;
ConfirmModal.displayName = 'ConfirmModal';
