import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const MapIcon: FC<Icons> = ({ className, fill = 'none' }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 56 75'
		>
			<path
				d='M35.3432 27.7756C35.3432 32.0647 31.8666 35.5412 27.5776 35.5412C23.2886 35.5412 19.812 32.0646 19.812 27.7756C19.812 23.4865 23.2886 20.01 27.5776 20.01C31.8666 20.01 35.3432 23.4866 35.3432 27.7756Z'
				fill='#3C7B68'
			/>
			<path
				d='M46.2101 7.25172C40.4484 1.96652 32.9641 -0.56858 25.1281 0.10722C10.6831 1.35722 -0.578946 14.2052 0.0230537 28.7482C0.112898 30.9357 0.460555 33.092 1.05036 35.1349C1.8863 38.0958 14.5734 63.0839 17.0894 68.0329C18.9214 71.7712 23.0386 74.1891 27.5734 74.1891C32.1082 74.1891 36.2257 71.775 38.0424 68.068C40.5268 63.1813 52.7924 39.006 54.0154 35.38C54.0388 35.3214 54.0583 35.2628 54.0739 35.2003C54.7888 32.7433 55.1481 30.1808 55.1481 27.5753C55.1521 19.8722 51.8937 12.4627 46.2101 7.25172ZM27.5771 40.5407C20.538 40.5407 14.8111 34.8141 14.8111 27.7747C14.8111 20.7356 20.5377 15.0087 27.5771 15.0087C34.6165 15.0087 40.3431 20.7353 40.3431 27.7747C40.3431 34.8138 34.6165 40.5407 27.5771 40.5407Z'
				fill='#3C7B68'
			/>
		</svg>
	)
}
