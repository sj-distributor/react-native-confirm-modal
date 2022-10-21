import React, {
  createContext,
  createRef,
  FC,
  useContext,
  useState,
} from 'react';
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

export const useConfirmModal = () => {
  return useContext(ConfirmModalContext);
};

export const ConfirmModalProvider: FC<IConfirmModalProviderProps> = ({
  children,
}) => {
  const _confirmModalRef = createRef<ConfirmModalType>();

  const [options, setOptions] = useState<IConfirmModalProps>();

  const showConfirmModal = (overrideOptions: IConfirmModalProps) => {
    setOptions({ ...overrideOptions });

    _confirmModalRef.current !== null &&
      _confirmModalRef.current.showConfirmModal();
  };

  return (
    <ConfirmModalContext.Provider value={{ showConfirmModal }}>
      {children}

      <ConfirmModal ref={_confirmModalRef} {...options} />
    </ConfirmModalContext.Provider>
  );
};
