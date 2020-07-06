import { Navigation } from "react-native-navigation";
import App from "./App";
Navigation.registerComponent('AppRoot', () => App);
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'AppRoot',
                            options: {
                                topBar: {
                                    visible: false,
                                }
                            }
                        }
                    }
                ]
            }
        }
    });
});