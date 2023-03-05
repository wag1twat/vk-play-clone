import {
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalOverlayProps,
  ModalProps,
} from '@chakra-ui/react'
import React from 'react'

interface Disclosure {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
  isControlled: boolean
  getButtonProps: (props?: any) => any
  getDisclosureProps: (props?: any) => any
}

interface BasicProps extends Omit<ModalProps, 'children' | 'isOpen' | 'onClose'> {
  disclosure: Disclosure
  useModalCloseButton?: boolean
  useModalOverlay?: boolean
  modalOverlayProps?: ModalOverlayProps
  Footer?: React.FC<Disclosure>
  Header?: React.FC<Disclosure>
  Trigger?: React.FC<Disclosure>
  Body?: React.FC<Disclosure>
  bodyProps?: ModalBodyProps
  contentProps?: ModalContentProps
}

export function BasicDialog({
  Trigger,
  Header,
  Footer,
  Body,
  bodyProps,
  contentProps,
  useModalCloseButton,
  useModalOverlay,
  modalOverlayProps,
  disclosure,
  ...props
}: BasicProps) {
  return (
    <>
      {Trigger && <Trigger {...disclosure} />}
      <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} {...props}>
        {useModalOverlay && <ModalOverlay {...modalOverlayProps} />}
        <ModalContent {...contentProps}>
          {Header && (
            <ModalHeader>
              <Header {...disclosure} />
            </ModalHeader>
          )}

          {useModalCloseButton && <ModalCloseButton />}

          {Body && (
            <ModalBody {...bodyProps}>
              <Body {...disclosure} />
            </ModalBody>
          )}

          {Footer && (
            <ModalFooter>
              <Footer {...disclosure} />
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
