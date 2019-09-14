import React, { Component } from "react";



class TableComp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        console.log("accessingapiinadifferentfile", this.props.data)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>E-mail address</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.data ?
                            this.props.data.map(users => {
                                return (
                                    <tr key={users.id}>

                                        <td>{users.id}</td>
                                        <td>{users.name} </td>
                                        <td>{users.email}</td>
                                        
                                    </tr>
                                )
                            }


                            )
                            : null
                        }

                    </tbody>
                </table>

            </div>
        );
    }
}
export default TableComp;
