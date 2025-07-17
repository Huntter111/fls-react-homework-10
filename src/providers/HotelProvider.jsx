import { hotels } from '@/api/hotels'
import { HotelContext } from '@/contexts/HotelContext'

const HotelProvider = ({ children }) => {
	return <HotelContext value={hotels}>{children}</HotelContext>
}

export default HotelProvider
