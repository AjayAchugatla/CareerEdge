import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>

            <header>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </header>
            <Link to='/' >

            </Link>
        </div>
    )
}

export default Header