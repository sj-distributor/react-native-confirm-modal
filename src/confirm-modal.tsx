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
  Animated,
  Easing,
  EasingFunction,
} from 'react-native';
import Styles from './style';
import type { ConfirmModalType, IConfirmModalProps } from './types';

const EasignOut: EasingFunction = Easing.bezier(0.25, 0.46, 0.45, 0.94);
const EasingIn: EasingFunction = Easing.out(EasignOut);

const AnimatedDuration: number = 200;

const OverlayOpacity: Animated.Value = new Animated.Value(0);
const ModalOpacity: Animated.Value = new Animated.Value(0);

const ConfirmModal = forwardRef<ConfirmModalType>((_, ref) => {
  const [options, setOptions] = useState<IConfirmModalProps>({
    confirmText: '',
  });

  const {
    title,
    description,
    cancelText,
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

    _animateIn();
  };

  const _onCancel = () => {
    _animateOut();

    onCancel && onCancel();
  };

  const _onConfirm = () => {
    _animateOut();

    onConfirm && onConfirm();
  };

  const _animateIn = () => {
    OverlayOpacity.setValue(0);

    Animated.parallel([
      Animated.timing(OverlayOpacity, {
        toValue: 0.32,
        easing: EasignOut,
        duration: AnimatedDuration,
        useNativeDriver: true,
      }),

      Animated.timing(ModalOpacity, {
        toValue: 1,
        easing: EasignOut,
        duration: AnimatedDuration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const _animateOut = () => {
    Animated.parallel([
      Animated.timing(OverlayOpacity, {
        toValue: 0,
        easing: EasingIn,
        duration: AnimatedDuration,
        useNativeDriver: true,
      }),

      Animated.timing(ModalOpacity, {
        toValue: 0,
        easing: EasignOut,
        duration: AnimatedDuration,
        useNativeDriver: true,
      }),
    ]).start(() => setOpen(false));
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
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: OverlayOpacity,
            },
          ]}
        />

        <Animated.View
          style={[
            styles.container,
            {
              opacity: ModalOpacity,
            },
          ]}
        >
          <View style={styles.modalView}>
            {!!title && <Text style={styles.titleStyle}>{title}</Text>}

            {!!description && (
              <Text style={styles.descriptionStyle}>{description}</Text>
            )}
            <View style={styles.buttonStyle}>
              {cancelText && (
                <TouchableOpacity
                  activeOpacity={0.6}
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
                  activeOpacity={0.6}
                  onPress={_onConfirm}
                  style={[
                    styles.button,
                    styles.confirmButtonStyle,
                    confirmStyle,
                  ]}
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
        </Animated.View>
      </RNModal>
    </View>
  );
});

export default ConfirmModal;
ConfirmModal.displayName = 'ConfirmModal';
