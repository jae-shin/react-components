// TODO
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mouseAction: false
    };
  }


  onListItemMouseAction() {
    this.setState({
      mouseAction: !this.state.mouseAction
    });
  }

  render() {

    var style = {
      fontWeight: this.state.mouseAction ? 'bold' : 'normal'
    };

    return (
      <li style={style} 
      onMouseOver={this.onListItemMouseAction.bind(this)}
      onMouseOut={this.onListItemMouseAction.bind(this)}
      >{this.props.item}</li>
    );
  }

}

// var Eggs = () => (
//   <li>Eggs</li>
// );

// var Bananas = () => (
//   <li>Bananas</li>
// );

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem => 
      <GroceryListItem item={groceryItem} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['eggs', 'bananas', 'oranges', 'granola bars']} />, document.getElementById('app'));
