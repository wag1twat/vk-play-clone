import React from 'react'
import { DropdownItem } from "src/features"

interface Context {
    media: DropdownItem[],
    games: DropdownItem[],
    tournaments: DropdownItem[]
}

export const context = React.createContext({} as Context)