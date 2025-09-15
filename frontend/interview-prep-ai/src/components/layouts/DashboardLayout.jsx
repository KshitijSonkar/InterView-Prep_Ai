import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Navbar from './Navbar'
import Footer from './footer'

const DashboardLayout = ({children}) => {
    const {user, loading} = useContext(UserContext)
    
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }
    
    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Please log in to access the dashboard</div>
            </div>
        );
    }
    
    // return (
    //     <div>
    //         <Navbar/>
    //         <div>{children}</div>
    //     </div>
    // )

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar at the top */}
            <Navbar />

            {/* Main content grows to fill available space */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    )
}

export default DashboardLayout