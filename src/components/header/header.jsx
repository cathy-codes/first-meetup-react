import { useState } from "react"
import Menu from './menu'

export default function Header() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    function handleProfileButton() {
        setShowProfileMenu(!showProfileMenu)
    }

    return ( 
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl">Music Store</h1>
            <div className="flex items-center">
                <a href="#" className="mr-6">
                    <span className="material-icons"> shopping_cart </span>
                </a>

                <div className="relative inline-block text-left">
                    <button type="button" className="inline-flex items-center" onClick={handleProfileButton}>
                        <span className="material-icons"> account_circle </span>
                        <span className="ml-2">Profile</span>
                        <span className="material-icons"> arrow_drop_down </span>
                    </button>
                    {
                        showProfileMenu &&
                        <Menu />
                    }
                </div>
            </div>
        </header>
    )
}