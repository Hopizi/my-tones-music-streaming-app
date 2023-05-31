import {Discover,Explorer,Search,Music,Albums,Artists,Cover,Favourites,Shared,Download,Settings,Logout} from "../assets/sidebar-icons"



const menuLinks = [
        {title: "Discover", icon: Discover, path: '/'},
        {title: "Explorer", icon: Explorer, path: '/explore'},
        {title: "Search", icon: Search, path: '/search'},
]

const libraryLinks = [
        {title: "My Music", icon: Music},
        {title: "Albums", icon: Albums},
        {title: "Artists", icon: Artists}
]

const playlistsLinks = [
        {title: "Favourites", icon: Shared},
        {title: "Shared", icon: Favourites},
        {title: "Downloads", icon: Cover}
]

const othersLink = [
        {title: "Settings", icon: Logout, path: '/settings'},
        {title: "Logout", icon: Settings}
]

export {
     menuLinks,
     libraryLinks,
     playlistsLinks,
     othersLink
}


