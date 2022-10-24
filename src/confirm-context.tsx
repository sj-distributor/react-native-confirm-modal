import React, { createContext, createRef, FC, useContext } from 'react';
import ConfirmModal from './confirm-modal';
import type {
  ConfirmModalContextType,
  IConfirmModalType,
  IConfirmModalProviderProps,
} from './types';

const ConfirmModalContext = createContext<ConfirmModalContextType>({
  showConfirmModal: () => null,
});

export const useConfirmModal = () => useContext(ConfirmModalContext);

export const ConfirmModalProvider: FC<IConfirmModalProviderProps> = ({
  children,
}) => {
  const confirmModalRef = createRef<ConfirmModalContextType>();

  const showConfirmModal = (options: IConfirmModalType) => {
    confirmModalRef.current !== null &&
      confirmModalRef.current.showConfirmModal(options);
  };

  return (
    <ConfirmModalContext.Provider value={{ showConfirmModal }}>
      {children}

      <ConfirmModal ref={confirmModalRef} />
    </ConfirmModalContext.Provider>
  );
};
