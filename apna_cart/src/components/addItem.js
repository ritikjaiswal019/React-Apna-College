import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  //   state = {};
  render() {
    return (
      <form
        className="row justify-content-center"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addNewItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control text-dark"
            id="inputName"
            aria-describedby="Name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control text-dark"
            id="inputPrice"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: Number(e.currentTarget.value) });
            }}
            value={Number(this.state.productPrice)}
          />
        </div>
        <div className="col-4 justify-content-center d-flex align-content-center align-items-center">
          <button type="submit" className="btn btn-primary h-auto btn-sm">
            Add Item
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
