import React, { Component } from "react";

class ControlledFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      grams: "",
      state: "Orange",
      tableData: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { productName, grams, state } = this.state;

    // Calculate calories, protein, fat, and carbohydrates based on the entered data
    const calories = calculateCalories(productName, grams);
    const protein = calculateProtein(productName, grams);
    const fat = calculateFat(productName, grams);
    const carbohydrates = calculateCarbohydrates(productName, grams);

    // Get the current date and time
    const dateTime = new Date().toLocaleString();

    // Add the entered data to the tableData array
    const newData = {
      productName,
      grams,
      calories,
      protein,
      fat,
      carbohydrates,
      dateTime
    };
    this.setState(prevState => ({
      tableData: [...prevState.tableData, newData],
      productName: "",
      grams: "",
      state: "Orange"
    }));
  }

  render() {
    const { tableData } = this.state;

    return (
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div style={{ textAlign: "center", width : "400px" }}>
          <h3 style={{ fontSize: "36px" }}>Калькулятор калорий</h3>
          <br />
          <form style={{ width: "400px", height: "200px" }} onSubmit={this.onSubmitHandler}>
            <label>Продукт: </label>
            <select
              name="productName"
              value={this.state.productName}
              onChange={this.onChangeHandler}
              style={{ width: "100%", height: "30px" }}
            >
              <option value="Апельсин">Апельсин</option>
              <option value="Желе">Желе</option>
              <option value="Пепси">Пепси</option>
              <option value="Печенье">Печенье</option>
              <option value="Шоколад черный">Шоколад черный</option>
            </select>
            <br />
            <br />
            <label>Вес: </label>
            <input
              type="text"
              name="grams"
              value={this.state.grams}
              placeholder="Введите вес продукта"
              onChange={this.onChangeHandler}
              style={{ width: "100%", height: "30px" }}
            />
            <br />
            <br />
            <button type="submit">Calculate</button>
          </form>
          <br />
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>Product</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Quantity</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Calories</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Proteins</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Fats</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Carbohydrates</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Date & time</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.productName}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.grams}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.calories}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.protein}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.fat}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.carbohydrates}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// Placeholder functions to calculate calories, protein, fat, and carbohydrates
function calculateCalories(productName, grams) {
  // Add logic to calculate calories based on the product and weight
  return "Calories";
}

function calculateProtein(productName, grams) {
  // Add logic to calculate protein based on the product and weight
  return "Protein";
}

function calculateFat(productName, grams) {
  // Add logic to calculate fat basedon the product and weight
  return "Fat";
}

function calculateCarbohydrates(productName, grams) {
  // Add logic to calculate carbohydrates based on the product and weight
  return "Carbohydrates";
}

export default ControlledFormComponent;