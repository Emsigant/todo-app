import React, { PropsWithChildren } from "react"

export default function Rv({ show, children }: PropsWithChildren<{ show: boolean }>) {
    if (show) return <>{children}</>;
    return null
}