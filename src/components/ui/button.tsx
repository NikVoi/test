import { FC } from 'react'
import { ButtonProps } from '../../types/types'

const Button: FC<ButtonProps> = ({
	children,
	onClick,
	className = '',
	disabled,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`px-4 py-2 rounded bg-[#00C26F] text-white border border-solid border-[#00C26F] cursor-pointer
	disabled:bg-gray-400 disabled:cursor-not-allowed transition-all ${className}`}
		>
			{children}
		</button>
	)
}

export default Button
