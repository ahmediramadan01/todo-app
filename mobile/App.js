import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./components/Home";
import Todo from "./components/Todo";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Todos" component={Todo} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
