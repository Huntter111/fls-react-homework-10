import HotelItem from '@/pages/Travel/components/Hotel/HotelItem'

const HotelList = ({ hotelList }) => {
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{hotelList.map((hotel) => (
				<HotelItem key={hotel.id} hotel={hotel} />
			))}
		</div>
	)
}

export default HotelList
