import React, { memo, useEffect, useMemo, useRef } from 'react';
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
import type { IConfirmDialogProps } from './types';

const EasignOut: EasingFunction = Easing.bezier(0.25, 0.46, 0.45, 0.94);
const EasingIn: EasingFunction = Easing.out(EasignOut);

const AnimatedDuration: number = 200;

const OverlayOpacity: Animated.Value = new Animated.Value(0);
const ModalOpacity: Animated.Value = new Animated.Value(0);

const ConfirmDialog = memo(
  ({
    open,
    title,
    onCancel,
    onConfirm,
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    description,
    cancelStyle,
    confirmStyle,
    cancelTextStyle,
    confirmTextStyle,
    cancelTextVisible = true,
  }: IConfirmDialogProps) => {
    const styles = useRef(Styles()).current;

    useEffect(() => {
      open && animateIn();
    }, [open]);

    const _onCancel = () => {
      animateOut('cancel');
    };

    const _onConfirm = () => {
      animateOut('confirm');
    };

    const animateIn = () => {
      OverlayOpacity.setValue(0);

      Animated.parallel([
        Animated.timing(OverlayOpacity, {
          toValue: 0.32,
          easing: EasignOut,
          useNativeDriver: true,
          duration: AnimatedDuration,
        }),

        Animated.timing(ModalOpacity, {
          toValue: 1,
          easing: EasignOut,
          useNativeDriver: true,
          duration: AnimatedDuration,
        }),
      ]).start();
    };

    const animateOut = (type: 'confirm' | 'cancel') => {
      Animated.parallel([
        Animated.timing(OverlayOpacity, {
          toValue: 0,
          easing: EasingIn,
          useNativeDriver: true,
          duration: AnimatedDuration,
        }),

        Animated.timing(ModalOpacity, {
          toValue: 0,
          easing: EasignOut,
          useNativeDriver: true,
          duration: AnimatedDuration,
        }),
      ]).start(() => {
        if (type === 'cancel') {
          return onCancel && onCancel();
        }

        onConfirm && onConfirm();
      });
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
                {!!cancelText && !!cancelTextVisible && (
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

                {!!confirmText && (
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
  }
);

export default ConfirmDialog;
ConfirmDialog.displayName = 'ConfirmDialog';
