import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'
import { SideBarIcon } from './SideBarIcon'

export const SideBar = () => {
	return (
		<nav className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg'>
			<SideBarIcon icon={<FaFire size={28} />} text='Fire 🔥'/>
			<SideBarIcon icon={<BsPlus size={32}/>} text='Agregar ^_^'/>
			<SideBarIcon icon={<BsFillLightningFill size={20}/>} text='Velocidad 🏃‍♂️💨'/>
			<SideBarIcon icon={<FaPoo size={20}/>} text='Poop 💩'/>
			<SideBarIcon icon={<BsGearFill size={20}/>} text='Configuracion ⚙'/>
		</nav>
	)
}
