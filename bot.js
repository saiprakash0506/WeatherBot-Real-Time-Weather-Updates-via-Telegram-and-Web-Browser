<<<<<<< HEAD
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' and 'YOUR_OPENWEATHERMAP_API_KEY' with your actual tokens
const TELEGRAM_BOT_TOKEN = '6544438595:AAH-oYQ3Cx_5LwdwZOlrG3pyCkeQrw-d_mQ';
const OPENWEATHERMAP_API_KEY = 'e89ece6820b4e6374cc5b995c2996cc4';

// OpenWeatherMap API endpoint
const OWM_API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';

// Create a new Telegram bot
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// Listen for /weather command
bot.onText(/\/weather (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const city = match[1];

    // Make a request to the OpenWeatherMap API
    const params = {
        q: city,
        appid: OPENWEATHERMAP_API_KEY,
        units: 'metric',  // You can change units to 'imperial' for Fahrenheit
    };

    axios.get(OWM_API_ENDPOINT, { params })
        .then(response => {
            const weather = response.data.weather[0].description;
            const temperature = response.data.main.temp;
            const humidity = response.data.main.humidity;

            const message = `Weather in ${city}:\nDescription: ${weather}\nTemperature: ${temperature}°C\nHumidity: ${humidity}%`;

            // Send the weather report to the user
            bot.sendMessage(chatId, message);
        })
        .catch(error => {
            console.error(error);
            bot.sendMessage(chatId, 'Error fetching weather data. Please try again later.');
        });
});
=======
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' and 'YOUR_OPENWEATHERMAP_API_KEY' with your actual tokens
const TELEGRAM_BOT_TOKEN = '6544438595:AAH-oYQ3Cx_5LwdwZOlrG3pyCkeQrw-d_mQ';
const OPENWEATHERMAP_API_KEY = 'e89ece6820b4e6374cc5b995c2996cc4';

// OpenWeatherMap API endpoint
const OWM_API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';

// Create a new Telegram bot
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// Listen for /weather command
bot.onText(/\/weather (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const city = match[1];

    // Make a request to the OpenWeatherMap API
    const params = {
        q: city,
        appid: OPENWEATHERMAP_API_KEY,
        units: 'metric',  // You can change units to 'imperial' for Fahrenheit
    };

    axios.get(OWM_API_ENDPOINT, { params })
        .then(response => {
            const weather = response.data.weather[0].description;
            const temperature = response.data.main.temp;
            const humidity = response.data.main.humidity;

            const message = `Weather in ${city}:\nDescription: ${weather}\nTemperature: ${temperature}°C\nHumidity: ${humidity}%`;

            // Send the weather report to the user
            bot.sendMessage(chatId, message);
        })
        .catch(error => {
            console.error(error);
            bot.sendMessage(chatId, 'Error fetching weather data. Please try again later.');
        });
});
>>>>>>> 0a51fea7f6b82615931c848004e82fa919db069e
