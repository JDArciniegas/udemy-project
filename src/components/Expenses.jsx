import {Component} from "react";
import ExpenseItem from "./ExpenseItem";

class Expenses extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const expenses = [
            {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
            {title: 'Mortgage', amount: 1566.98, date: new Date(2021, 12, 28)},
            {title: 'Hydro', amount: 83.67, date: new Date(2022, 1, 15)}
        ];
        return(
            <div className="expenses">
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            </div>
        );
    }
}

export default Expenses;