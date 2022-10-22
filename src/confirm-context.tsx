import React, { createContext, createRef, FC, useContext } from 'react';
import ConfirmModal from './confirm-modal';
import type {
  ConfirmModalContextType,
  IConfirmModalProps,
  IConfirmModalProviderProps,
} from './types';

const ConfirmModalContext = createContext<ConfirmModalContextType>({
  showConfirmModal: () => null,
});

export const useConfirmModal = () => useContext(ConfirmModalContext);

export const ConfirmModalProvider: FC<IConfirmModalProviderProps> = ({
  children,
}) => {
  const _confirmModalRef = createRef<ConfirmModalContextType>();

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
