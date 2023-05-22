import {Discover,Explorer,Search,Music,Albums,Artists,Cover,Favourites,Shared,Download,Settings,Logout} from "../assets/sidebar-icons"



const menuLinks = [
        {title: "Discover", icon: Discover},
        {title: "Explorer", icon: Explorer},
        {title: "Search", icon: Search},
]

const libraryLinks = [
        {title: "My Music", icon: Music},
        {title: "Albums", icon: Albums},
        {title: "Artists", icon: Artists}
]

const playlistsLinks = [
        {title: "Cover", icon: Download},
        {title: "Favourites", icon: Shared},
        {title: "Shared", icon: Favourites},
        {title: "Downloads", icon: Cover}
]

const othersLink = [
        {title: "Settings", icon: Logout},
        {title: "Logout", icon: Settings}
]

export {
     menuLinks,
     libraryLinks,
     playlistsLinks,
     othersLink
}


