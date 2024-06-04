import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TottalBalanceBox from '@/components/TottalBalanceBox'
import React from 'react'

const Home = () => {

    
    const loggedIn = { firstName: 'Seth', lastName: 'Woods', email: 'Sethwoods.1dst@gmail.com' }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and Manage your Account and Transactions Efficiently.'
                    />
                    <TottalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={3200.15}

                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            {/* <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 890.54 }, { currentBalance: 670.54 }]}
            /> */}
        </section>
    )
}

export default Home