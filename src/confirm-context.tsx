import React, { createContext, createRef, FC, useContext } from 'react';
import ConfirmModal from './confirm-modal';
import type {
  ConfirmModalContextType,
  ConfirmModalType,
  IConfirmModalProps,
  IConfirmModalProviderProps,
} from './types';

export const ConfirmModalContext = createContext<ConfirmModalContextType>({
  showConfirmModal: () => null,
});

export const useConfirmModal = () => useContext(ConfirmModalContext);

export const ConfirmModalProvider: FC<IConfirmModalProviderProps> = ({
  children,
}) => {
  const _confirmModalRef = createRef<ConfirmModalType>();

  const showConfirmModal = (options: IConfirmModalProps) => {
    _confirmModalRef.current !== null &&
      _confirmModalRef.current.showConfirmModal(options);
  };

  return (
    <ConfirmModalContext.Provider value={{ showConfirmModal }}>
      {children}

      <ConfirmModal ref={_confirmModalRef} />
    </ConfirmModalContext.Provider>
  );
};
