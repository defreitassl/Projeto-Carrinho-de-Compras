import HomePage from "./components/homePage/HomePage.js"

export default class App {
    static init () {
        const homePage = new HomePage()
        homePage.renderScreen(true)
    }
}