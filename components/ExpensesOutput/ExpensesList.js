import { FlatList, Text } from "react-native";

function renderExpensesItem(itemDate) {
    return (
        <Text>{itemDate.item.description}</Text>
    )
}

function ExpensesList({ expenses }) {
return (
    <FlatList 
        data={expenses}
        renderItem={renderExpensesItem}
        keyExtractor={(item) => item.id}
    />
)
}
export default ExpensesList;