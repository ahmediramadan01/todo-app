import { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function Todo() {
	const [todos, setTodos] = useState([]);
	const [textInput, setTextInput] = useState("");

	const addTodo = () => {
		if (textInput.trim() !== "") {
			setTodos([...todos, { id: todos.length + 1, text: textInput, completed: false }]);
			setTextInput("");
		} else {
			alert("you must add a todo first");
		}
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			})
		);
	};

	return (
		<View style={styles.view1}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setTextInput(text)}
				value={textInput}
				placeholder="Enter todo..."
			/>
			<Button onPress={addTodo} title="Add Todo" />
			<FlatList
				data={todos}
				renderItem={({ item }) => (
					<View style={styles.view2}>
						<Text style={{ flex: 1, textDecorationLine: item.completed ? "line-through" : "none" }}>
							{item.text}
						</Text>
						<Button
							onPress={() => toggleComplete(item.id)}
							title={item.completed ? "Incomplete" : "Complete"}
						/>
						<Button onPress={() => deleteTodo(item.id)} title="Delete" />
					</View>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	view1: {
		flex: 1,
		padding: 20,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	view2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
});
