import { ReactNode } from 'react'

interface ButtonProps {
	children: ReactNode
	onClick?: () => void
	className?: string
}

const ButtonNav: React.FC<ButtonProps> = ({ children, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 w-full  text-white border border-solid border-[#46475E] bg-[#343443] cursor-pointer transition-all ${className} `}
		>
			{children}
		</button>
	)
}

export default ButtonNav
