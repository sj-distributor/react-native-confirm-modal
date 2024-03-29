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
import type { ConfirmDialogProps } from './types';

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
    titleStyle: overrideTitleStyle,
    cancelStyle,
    confirmStyle,
    containerStyle,
    cancelTextStyle,
    allowFontScaling = true,
    confirmTextStyle,
    descriptionStyle: overrideDescriptionStyle,
    cancelTextVisible = true,
    modalBackgroundStyle,
    buttonContainerStyle: overrideButtonContainerStyle,
  }: ConfirmDialogProps) => {
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
        <RNModal visible={open} transparent animationType={'none'}>
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
              modalBackgroundStyle,
            ]}
          >
            <View style={[styles.modalView, containerStyle]}>
              {!!title && (
                <Text
                  style={[styles.titleStyle, overrideTitleStyle]}
                  allowFontScaling={allowFontScaling}
                >
                  {title}
                </Text>
              )}

              {!!description && (
                <Text
                  style={[styles.descriptionStyle, overrideDescriptionStyle]}
                  allowFontScaling={allowFontScaling}
                >
                  {description}
                </Text>
              )}

              <View
                style={[
                  styles.buttonContainerStyle,
                  overrideButtonContainerStyle,
                ]}
              >
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
                      allowFontScaling={allowFontScaling}
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
                      allowFontScaling={allowFontScaling}
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
