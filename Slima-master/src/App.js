
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { Provider } from "react-redux";
import { store } from "./Utils/Store";
import { MainContainer } from "./Components/MainContainer";
import { WatchPage } from "./Components/WatchPage";

function App() {
    return(
        <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
        </Provider>
    )
}

export const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Body />,
        children : [
            {
                path : "/",
                element : <MainContainer /> 
            },
            {
                path : "watch", 
                element : <WatchPage  />
            }
        ]
    }
])

export default App;