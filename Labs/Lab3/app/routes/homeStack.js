import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import ProjectDetails from '../screens/projectDetails'


const HomeStack = createStackNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
            headerMode: "none"
        }
    },
    ProjectDetails: {
        screen: ProjectDetails,
        navigationOptions: {
            headerShown: false,
            headerMode: "none"
        }
    }
});

export default createAppContainer(HomeStack);
