import SearchIcon from '../Icons/SearchIcon'
import NotificationsIcon from '../Icons/NotificationsIcon'
import PersonIcon from '../Icons/PersonIcon'

const Header = () => {
  return (
    <div className="flex justify-between items-center pb-[50px] mb-[72px] border-white/55 border-b-4">
        <div>
        <h1 className="font-bold text-[40px]">Good Morning, Name</h1>
        </div>
        <div className="flex items-center gap-7 ">
            <div className="relative">
            <input name="search" className="rounded w-[465px] h-[76px] px-8 text-2xl focus:outline-none text-black" placeholder="Search" />
            <SearchIcon className="absolute -translate-y-1/2 top-1/2 right-9"/>
            </div>
        <button>
            <NotificationsIcon/>
        </button>
        <button>
            <PersonIcon/>
        </button>

        </div>
    </div>
  )
}

export default Header