import React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import {
  ConfirmModalProvider,
  useConfirm,
} from '@sj-distributor/react-native-confirm-modal';

const Demo = () => {
  const { confirm } = useConfirm();

  return (
    <View style={styles.container}>
      <Button
        title={'Click Demo'}
        onPress={async () => {
          const isOk = await confirm({
            title: 'Demo',
            confirmText: 'Confirm',
            description: `Here is a demo
Here is a demo
Here is a demo`,
            containerStyle: {
              paddingTop: 19,
              marginHorizontal: 16,
              backgroundColor: 'rgba(242, 242, 242, 0.8)',
            },
            titleStyle: {
              color: 'rgba(0, 0, 0, 0.8)',
              fontSize: 16,
              lineHeight: 24,
              fontWeight: 'bold',
            },
            descriptionStyle: {
              color: 'rgba(0, 0, 0, 0.6)',
              fontSize: 14,
              lineHeight: 21,
              fontWeight: '400',
            },
            cancelTextStyle: {
              color: '#007AFF',
              fontSize: 17,
              lineHeight: 22,
              fontWeight: '400',
            },
            confirmTextStyle: {
              color: '#007AFF',
              fontSize: 17,
              lineHeight: 22,
              fontWeight: 'bold',
            },
          });

          console.log(isOk);
        }}
      />

      <Button
        title={'Click Demo 2'}
        onPress={() => {
          confirm({
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
