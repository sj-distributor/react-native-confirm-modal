import React from 'react';

import { View, Button } from 'react-native';
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
            description: 'Here is a demo',
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
