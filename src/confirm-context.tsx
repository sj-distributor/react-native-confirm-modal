import React, { createContext, FC, useContext, useState } from 'react';
import ConfirmDialog from './confirm-dialog';
import type {
  ConfirmModalContextType,
  ConfirmModalType,
  IConfirmModalProviderProps,
  ResolveRejectType,
} from './types';

const ConfirmModalContext = createContext<ConfirmModalContextType>(
  {} as ConfirmModalContextType
);

export const useConfirm = () => useContext(ConfirmModalContext);

const DEFAULT_CONFIRM_OPTION: ConfirmModalType = {
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  cancelTextVisible: true,
};

export const ConfirmModalProvider: FC<IConfirmModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [options, setOptions] = useState<ConfirmModalType>(
    DEFAULT_CONFIRM_OPTION
  );

  const [resolveReject, setResolveReject] = useState<
    ResolveRejectType | string[]
  >([]);

  const [resolve] = resolveReject as ResolveRejectType;

  const confirm = (overrideOptions: ConfirmModalType) =>
    // eslint-disable-next-line no-shadow
    new Promise<boolean>((resolve, reject) => {
      setOptions({ ...DEFAULT_CONFIRM_OPTION, ...overrideOptions });

      setIsOpen(true);
      setResolveReject([resolve, reject]);
    });

  const handleCancel = () => {
    if (resolve) {
      resolve(false);
      setIsOpen(false);

      options.onCancel && options.onCancel();
    }
  };

  const handleConfirm = () => {
    if (resolve) {
      resolve(true);
      setIsOpen(false);

      options.onConfirm && options.onConfirm();
    }
  };

  return (
    <ConfirmModalContext.Provider value={{ confirm }}>
      {children}

      <ConfirmDialog
        {...options}
        open={isOpen}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </ConfirmModalContext.Provider>
  );
};
