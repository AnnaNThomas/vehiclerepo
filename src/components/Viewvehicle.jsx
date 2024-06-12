import React, { useState } from 'react'
import Nav from './Nav'

const Viewvehicle = () => {
    const [data, changedata] = useState([])
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">vname</th>
                                    <th scope="col">vno</th>
                                    <th scope="col">vcolor</th>
                                    <th scope="col">vmodel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            <td>{value.vname}</td>
                                            <td>{value.vno}</td>
                                            <td>{value.vcolor}</td>
                                            <td>{value.vmodel}</td>
                                        </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewvehicle