'use client'

import { Button, ButtonProps } from "flowbite-react"
import { ReactNode } from "react";

type IButtonComponentProps = ButtonProps & {
    children: ReactNode;
    isLoading?: boolean;
}

export const ButtonComponent = ({
    children, 
    isLoading,
    ...props
}:IButtonComponentProps) => {
    return (
        <Button {...props} outline color="blue" disabled={isLoading} className={isLoading ? "animate-pulse" : ""}>
            {children}
        </Button>
    )
}