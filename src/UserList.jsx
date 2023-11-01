import React from 'react'


const UserList = ({ users }) => {

    return (
        <>
     
            <div className="movie col-md-3 p-2 card text-center">
                <div className="">
                    <img src="https://thispersondoesnotexist.com" alt="" />
                    <h2>{users.id}</h2>
                    <h5>{users.username}</h5>
                    <h5>{users.email}</h5>
                    <h3>{users.address.city}</h3>
                    <p>{users.name}</p>
                </div>
            </div>


        </>
    )
}

export default UserList