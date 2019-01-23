class FilteredList extends React.Component {

    constructor(props) {
        super(props);

        var allItems = ['Tiger', 'Eagle', 'Frog', 'Dolphin', 'Rabbit', 'Wolf'];

        this.state = {
            initialItems: allItems,
            currentItems: allItems
        };
    }

    filterList(input) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter((item) => item.search(input.target.value) !== -1);
        this.setState({ currentItems: updatedList });
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Search' onChange={this.filterList.bind(this)} />
                <ListItems items={this.state.currentItems} />
            </div>
        );
    }
};

class ListItems extends React.Component {
    render() {
        return(
            <ul>
                {this.props.items.map((item)=> <li key={item}>{item}</li>)}
            </ul>
        );
    }
};

ReactDOM.render(<FilteredList/>, document.getElementById('root'));
