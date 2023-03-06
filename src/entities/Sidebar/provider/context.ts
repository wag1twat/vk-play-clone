import React from "react";

interface Context {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
    visibility: boolean
}

const context = React.createContext<Context>({} as Context)

export { context }