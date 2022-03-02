import { Component } from 'react';
import ProductList from '../../components/ProducList';
import ProductItem from '../../components/ProductItem';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions'

class ProducListPage extends Component {


    componentDidMount() {
        this.props.fetchProducts();
    }

    showProductItem = (products) => {
        const productItemList = products.map((product, index) => (
            <ProductItem
                key={index}
                product={product}
                index={index}
                onDelete={this.onDelete}
            />
        ))

        return productItemList;
    }

    onDelete = id => {
        this.props.deleteProduct(id);
    }

    render() {
        const { productList } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/product/add" type="button" className="btn btn-info mb-10">Thêm sản phẩm</Link>

                        <ProductList>
                            {this.showProductItem(productList)}
                        </ProductList>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.productList,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        deleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProducListPage);
