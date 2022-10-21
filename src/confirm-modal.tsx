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
  Pressable,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Styles from './style';
import type { ConfirmModalType, IConfirmModalProps } from './types';
import PropTypes from 'prop-types';

const ConfirmModal = forwardRef<ConfirmModalType, IConfirmModalProps>(
  (props, ref) => {
    const {
      title,
      description,
      cancelText,
      confirmText,
      onCancel,
      onConfirm,
      cancelStyle,
      confirmStyle,
    } = props;

    useImperativeHandle(ref, () => ({
      showConfirmModal,
    }));

    const styles = useRef(Styles()).current;

    const [open, setOpen] = useState<boolean>(false);

    const showConfirmModal = () => {
      setOpen(true);

      // 设置动画
    };

    const _onCancel = () => {
      setOpen(false);

      onCancel && onCancel();
    };

    const _onConfirm = () => {
      setOpen(false);

      onConfirm && onConfirm();
    };

    const borderRightWidthStyle = useMemo((): StyleProp<ViewStyle> => {
      return {
        borderRightWidth:
          cancelText && confirmText ? StyleSheet.hairlineWidth : 0,
      };
    }, [cancelText, confirmText]);

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
                  <Text style={[styles.textStyle, styles.cancelButtonStyle]}>
                    {cancelText}
                  </Text>
                </TouchableOpacity>
                <Pressable
                  style={[
                    styles.button,
                    styles.confirmButtonStyle,
                    confirmStyle,
                  ]}
                  onPress={_onConfirm}
                >
                  <Text style={styles.textStyle}>{confirmText}</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </RNModal>
      </View>
    );
  }
);

export default ConfirmModal;
ConfirmModal.displayName = 'ConfirmModal';
ConfirmModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  cancelStyle: PropTypes.object,
  confirmStyle: PropTypes.object,
};
ConfirmModal.defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'Confirm',
};
