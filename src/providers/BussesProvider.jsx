import { busses } from '@/api/busses'
import { BussesContext } from '@/contexts/BussesContext'

const BussesProvider = ({ children }) => {
	return <BussesContext value={busses}>{children}</BussesContext>
}

export default BussesProvider
