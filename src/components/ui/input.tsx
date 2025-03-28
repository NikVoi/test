import { FC } from 'react'
import { InputProps } from '../../types/types'

const Input: FC<InputProps> = ({
	value,
	onChange,
	placeholder = '',
	type = 'text',
	className = '',
	disabled = false,
}) => {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
			className={`w-full p-2 mt-3 border rounded-md mb-4 ${className}`}
		/>
	)
}

export default Input
