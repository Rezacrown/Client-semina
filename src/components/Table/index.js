import React from 'react';

const Table = ({users, children}) => {
    console.log(children)
    return (
        <table>
            <thead>
                <tr>
                    <th>Nomor</th>
                    <th>Nama</th>
                    <th>Usia</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=> {
                    return (
                        <tr key={index}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Table;
