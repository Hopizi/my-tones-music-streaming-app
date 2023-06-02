import {Discover,Explorer,Search,Music,Albums,Artists,Cover,Favourites,Shared,Download,Settings,Logout} from "../assets/sidebar-icons"



const menuLinks = [
        {title: "Discover", icon: Discover, path: '/'},
        {title: "Explorer", icon: Explorer, path: '/explore'},
        {title: "Search", icon: Search, path: '/search'},
]

const libraryLinks = [
        {title: "My Music", icon: Music, path:'/mymusic'},
        {title: "Albums", icon: Albums, path:'/albums'},
        {title: "Artists", icon: Artists, path:'/artists'}
]

const playlistsLinks = [
        {title: "Favourites", icon: Shared, path:'/favourites'},
        {title: "Shared", icon: Favourites, path:'/shared'},
        {title: "Downloads", icon: Cover, path:'/downloads'}
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


