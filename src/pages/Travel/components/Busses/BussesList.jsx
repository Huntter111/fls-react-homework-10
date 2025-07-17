import BussesItem from '@/pages/Travel/components/Busses/BussesItem'

const BussesList = ({ bussesList }) => {
	return (
		<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
			{bussesList.map((bus) => (
				<BussesItem key={bus.id} bus={bus} />
			))}
		</div>
	)
}

export default BussesList
