import React, {useEffect,useState} from 'react'
import axios from 'axios'
import UserCard from './UserCard'


function UserList() {
    const [users,setUsers] = useState([])
    
        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res=>{
                console.log(res.data)
                setUsers(res.data)
            })
          .catch(err=>{
                console.log(err)
            })
        },[])
    
  return (
    <div>
            <nav className='w-full py-6 bg-[#121829] border-[#121829] border-b-2 px-8 md:px-16 lg:px-28 xl:px-32 2xl:px-52 flex justify-between items-center'>
                <div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25621 15.7628L26.7802 4.768C30.097 2.6872 34.4002 5.0796 34.4002 9.0052V30.9948C34.4002 34.92 30.097 37.3128 26.7802 35.232L9.25621 24.2372C6.1366 22.2796 6.1366 17.7204 9.25621 15.7628Z" fill="#4BB7FD" />
                        <path d="M30.7441 15.7628L13.2201 4.768C9.9033 2.6872 5.6001 5.0796 5.6001 9.0052V30.9948C5.6001 34.92 9.9033 37.3128 13.2201 35.232L30.7441 24.2372C33.8637 22.2796 33.8637 17.7204 30.7441 15.7628Z" fill="#7B6EF6" />
                    </svg>
                </div>
                <div>
                    <ul className='justify-center gap-10 text-white lg:flex hidden'>
                        <li>Movies</li>
                        <li>Tv Shows</li>
                        <li className='flex gap-2 items-center'>Suggest me <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.61987 3.95331L13.6665 7.99997L9.61987 12.0466" stroke="#A8AEBF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.33325 8H13.5533" stroke="#A8AEBF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Hero section */}
            <div className='px-8 md:px-16 lg:px-28 2xl:px-52 xl:px-32 py-24 w-full'>
                <div className='w-full lg:w-[523px] break-words h-[188px] flex flex-col gap-7'>
                    <h1 className='text-white text-3xl lg:text-6xl'>
                        MaileHereko
                    </h1>
                    <p className='text-[#8E95A9] text-sm lg:text-md break-words'>
                        List of movies and TV Shows, I, <span className='text-[#9C92F8]'>Pramod Poudel</span> have watched till date. Explore what I have watched and also feel free to make a suggestion.😉
                    </p>

                    <div className="flex gap-3 w-full lg:w-2/3 items-center px-6 py-4 rounded-xl bg-[#323B5420] border border-[#ffffff90]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#475069" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 22L20 20" stroke="#475069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input type="text" className="py-1 bg-transparent focus:outline-none text-white text-sm px-2 w-full" placeholder="Enter your email" />
                    </div>
                    
                </div>
                <div>
                    
                </div>
            </div>

            <div className="px-8 md:px-16 lg:px-28 2xl:px-52 xl:px-32 lg:mt-5 mt-2">

                <div className="bg-[#00000020] rounded-xl py-2 pl-3 text-white pr-8 lg:w-[40%] xl:w-[25%] 2xl:w-[20%] md:w-[50%] w-full flex gap-3 justify-between items-center">
                    <div className="py-2 bg-[#7B6EF6] px-8 rounded-lg">All</div>
                    <div className="">Movies</div>
                    <div className="">Tv Shows</div>
                </div>

                <div className="flex gap-1 text-gray-400 items-end pt-6">
                    <h1 className="text-3xl">All</h1>
                    <span className='text-lg'>(120)</span>
                </div>

                <div className="grid mt-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                
                    {
                        users.map(user=>{
                            return(
                                <UserCard key={user.id} user={user} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
  )
}

export default UserList