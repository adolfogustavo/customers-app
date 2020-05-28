import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        "dni": "329393293",
        "name": "Juan Perez",
        "age": "24"
    },
    {
        "dni": "200002300",
        "name": "Pedro Perez",
        "age": "26"
    },
    {
        "dni": "333203000",
        "name": "Jose Mendez",
        "age": "38"
    },
];

class CustomerListContainer extends Component {

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomerList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                body={this.renderBody(customers)}></AppFrame>
            </div>
        );
    }
}

export default withRouter(CustomerListContainer);