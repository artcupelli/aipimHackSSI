const { Board, Thermometer } = require("johnny-five");
const board = new Board();


//firebase connection
var firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyBpgq6Pj4vGbKqF_HxMQhw44yD-nLXOJro",
    authDomain: "aipim-climate-tracker.firebaseapp.com",
    databaseURL: "https://aipim-climate-tracker-default-rtdb.firebaseio.com",
    projectId: "aipim-climate-tracker",
    storageBucket: "aipim-climate-tracker.appspot.com",
    messagingSenderId: "856482482392",
    appId: "1:856482482392:web:02d21d2e76ffe1568dafad"
}

firebase.initializeApp(firebaseConfig);


board.on("ready", () => {
    const thermometer = new Thermometer({
        controller: "LM35", 
        pin: "A0"
    });

    thermometer.on("change", () => {
        const {celsius, fahrenheit, kelvin} = thermometer;
        console.log("Thermometer");
        console.log("celsius: ", celsius);
        console.log("fahrenheit: ", fahrenheit);
        console.log("kelvin: ", kelvin);
        console.log("------------");
    });
});