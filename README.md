# :rainbow: react-native-confirm-modal

[![Npm Version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/react-native-month-switch)
[![MIT License](https://img.shields.io/npm/l/react-native-tab-view.svg?style=flat-square)](https://www.npmjs.com/package/react-native-month-switch)
[![Preview](https://github.com/Simoon-F/react-native-month-switch/actions/workflows/preview.yml/badge.svg)](https://github.com/Simoon-F/react-native-month-switch/actions/workflows/preview.yml)

A React Native Confirm Modal

## Installation

```sh
yarn add @sj-distributor/react-native-confirm-modal

or

npm install @sj-distributor/react-native-confirm-modal
```

## Demo

## Usage

```ts
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
