"use client";

import { Button, Modal } from "flowbite-react";
import { ReactNode, useCallback, useState } from "react";

interface IModalProps {
  title: string;
  children: ReactNode;
  buttonContent: string | ReactNode;

  footers?: ReactNode;
}

export const ModalComponent = ({
  title,
  children,
  buttonContent,
  footers,
}: IModalProps) => {
  const [isOpen, setOpenModal] = useState(false);

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const openModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  return (
    <>
      <button
        aria-label={title}
        title={title}
        className="bg-transparent h-8 w-8 rounded-md flex justify-center items-center hover:border border-primary-700"
        onClick={openModal}
      >
        <span className="sr-only">{title}</span>
        {buttonContent}
      </button>
      <Modal
        show={isOpen}
        onClose={closeModal}
        size={"2xl"}
        position={"center"}
        dismissible
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>

        {footers && <Modal.Footer>{footers}</Modal.Footer>}
      </Modal>
    </>
  );
};
