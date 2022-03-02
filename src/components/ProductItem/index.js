import { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductItem extends Component {
  deleteProduct = id => {
    if (window.confirm('Bạn chắc chắn muốn xóa sản phẩm ?')) {
      this.props.onDelete(id);
    }
  }

  render() {
    const { product, index } = this.props;
    const [statusLabel, statusClass] = product.status ? ['Còn hàng', 'success'] : ['Hết hàng', 'default'];

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusLabel}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Sửa</Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={e => this.deleteProduct(product.id)}
          >Xóa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
