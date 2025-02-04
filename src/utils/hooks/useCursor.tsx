'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

const CursorContext = createContext<{
	text: string
	setText: (text: string) => void
} | null>(null)

export function CursorProvider({ children }: { children: ReactNode }) {
	const [text, setText] = useState<string>('')

	return <CursorContext.Provider value={{ text, setText }}>{children}</CursorContext.Provider>
}

export default function useCursor() {
	const context = useContext(CursorContext)
	if (!context) {
		throw new Error('useCursor must be used within a CursorProvider')
	}
	return context
}
