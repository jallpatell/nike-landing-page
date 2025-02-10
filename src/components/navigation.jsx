const Navigation = () => {
    return (
        <nav className="container">
            <div className='logo'>
            <img src='https://s3-alpha-sig.figma.com/img/4517/5a94/d5389cc06b9d40c646878c60ac4bf7ed?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=czgi0FcDmLRgTl9OeF9m1OgB6vr10ljy8LdHHAVI3nssbx3ukt~QW93wuRQSgIe4TTyVa~Y7uAiDu3LEhCH80p7lBUP4rZSqLBLnwyHb6ifOIsU9kX5gZusUZIhSGYuXb9lDSKg6WWXkLFGAK9-14ATGCitgOYSr3M4BTEzGIsJE-VjeqFa3-HJ1acZPdshcUvOZc0IxH2qxHY7ov96wOTnjvATDcyxXFuqjC8FQpXQ8YvTZHazb-QBAo8gGO1UVsLzNgCKEFJwRj4OGQ8EiEiVxYoWtK0gJaaoMfgWo5iF0BdXHULPXY1fhBiSEKIcWrOC0F-UAJOLYoaX-RqDZqA__' alt='logo' className='logo'/>
            </div>
            
            <ul>
            <li href='#'>Menu</li>
            <li href='#'>Location</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
            </ul>
            <button className="button-login">Login</button>
        </nav>
    )

}

export default Navigation;