import { IMatrix } from '@/context/MatrixAndVectorContextProvider'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { roundTo } from '@/utils/roundTo'

const Matrix = ({ matrix, label }: { matrix: IMatrix; label?: string }) => {
	return (
		<div>
			{label && <Label>{label}</Label>}
			<div className='flex flex-col gap-1'>
				{matrix.map((row, rowIndex) => (
					<div key={rowIndex} className='flex gap-1'>
						{row.map((item, columnIndex) => (
							<Input
								className='w-24'
								value={String(roundTo(item))}
								key={columnIndex}
								readOnly
							/>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default Matrix
