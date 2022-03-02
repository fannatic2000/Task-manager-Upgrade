import { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect } from 'react-redux'
import { 
    actAddProductRequest, 
    actGetProductRequest, 
    actUpdateProductRequest 
} from '../../actions'

class ProducActionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    componentDidMount() {
        const id = this.props.match?.params.id;
        if (id) {
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { itemEditing } = nextProps;
        if (itemEditing) {
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status,
            })
        }
    }

    handleChange = e => {
        const element = e.target;
        this.setState({
            [element.name]: element.type === 'checkbox' ? element.checked : element.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { id, txtName, txtPrice, chkbStatus } = this.state;
        const { history } = this.props;

        const product = {
            id: id,
            name: txtName,
            price: parseInt(txtPrice),
            status: chkbStatus
        }

        if (id) {
           this.props.onUpdateProduct(product);
        } else {
           this.props.onAddProduct(product);
        }

        history.goBack();
    }

    render() {
        const { txtName, txtPrice, chkbStatus } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Tên Sản Phẩm: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="txtName"
                                    value={txtName}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá: </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="txtPrice"
                                    value={txtPrice}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tên Sản Phẩm: </label>
                                <div className="checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="chkbStatus"
                                            checked={chkbStatus}
                                            onChange={this.handleChange}
                                        />
                                        Còn hàng
                                    </label>
                                </div>
                            </div>

                            <Link className="btn btn-default mr-10" to="/product-list">Trở lại</Link>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProducActionPage);
