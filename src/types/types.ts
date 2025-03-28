export interface Coin {
	id: number
	name: string
	symbol: string
}

export interface DropdownProps {
	selectedCurrency: number
	onCurrencyChange: (currencyId: number) => void
	coins: Coin[]
}

export interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	className?: string
	disabled?: boolean
}

export interface InputProps {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: 'text' | 'number' | 'password'
	className?: string
	disabled?: boolean
}

export interface CurrencyItemProps {
	label: string
	isReceiving?: boolean
}

export interface CurrencyInfoProps {
	reverseCurrencies: () => void
}
