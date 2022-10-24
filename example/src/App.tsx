import React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import {
  ConfirmModalProvider,
  useConfirmModal,
} from '@sj-distributor/react-native-confirm-modal';

const Demo = () => {
  const { showConfirmModal } = useConfirmModal();

  return (
    <View style={styles.container}>
      <Button
        title={'Click Demo'}
        onPress={() => {
          showConfirmModal({
            title: 'Demo',
            confirmText: 'Confirm',
            description: `Here is a demo
Here is a demo
Here is a demo`,
            onCancel: () => {
              console.log('onCancel');
            },
            onConfirm: () => {
              console.log('onConfirm');
            },
          });
        }}
      />

      <Button
        title={'Click Demo 2'}
        onPress={() => {
          showConfirmModal({
            title: 'Demo 2',
            confirmText: 'OK',
            cancelText: 'Close',
            description: 'Here is a demo 2',
            onCancel: () => {
              console.log('onCancel');
            },
            onConfirm: () => {
              console.log('onConfirm');
            },
          });
        }}
      />
    </View>
  );
};

export default function App() {
  return (
    <ConfirmModalProvider>
      <Demo />
    </ConfirmModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
