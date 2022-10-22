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

<a href="https://raw.githubusercontent.com/Simoon-F/react-native-confirm-modal/master/demo/demo.gif"><img src="https://raw.githubusercontent.com/Simoon-F/react-native-confirm-modal/master/demo/demo.gif" width="360"></a>

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
            confirmText: '確認',
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
```

## Contributing

## Contributing

While developing, you can run the [example app](https://github.com/Simoon-F/react-native-confirm-modal/blob/master/example/README.md) to test your changes.

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```
yarn typescript
yarn lint
```

To fix formatting errors, run the following:

```
yarn lint --fix
```

Remember to add tests for your change if possible.

## License

MIT
