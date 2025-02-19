const Navigation = () => {
    return (
        <nav className="container">
            <div className='logo'>
            <img src='data:image/png;base64,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' alt='logo' className='logo'/>
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