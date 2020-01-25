# uofthacks7

Repository for UofTHack VII Project

Barcode Scanner API: QuaggaJS, their website is: https://serratus.github.io/quaggaJS/

## Inspiration for the Project:

According to Food and Agriculture Organization of the United Nations, one third of every food is going to waste. It costs approximately a trillion US dollars every year. Even though we produce enough food to feed everyone, because we are wasting so much food, there are millions who cannot find food to eat. So, we want it to find a solution to this problem by keeping track of the expiration day of the foods and reminding  them to people to reduce the food waste.

## What it does

It scans your grocery items, stores them, and tell you when they will expire. Based on your current food items Elite EATS gives you recipe suggestions. It also checks the ingredients of the item and tell you whether it has a certain ingredient in it or not -such as dairy product for lactose intolerant people, or peanut butter for people who have allergies.

## How it was built it

We used web app with HTML, CSS, and JavaScript. Also, we used QuaggaJS API to scan barcodes and Google FireStore for database. We trained out image classifier model in Google Teachable Machines.

## Challenges we ran into

The API we are using to read the barcode is running with JavaScript and not efficient and fast enough for a commercial product. Also, we need a large database of barcode and the product information to reach a larger scope of objects.

## Accomplishments that we are proud of

We have a working demo which is capable of scanning barcodes and syncing them with FireStore real-time database. We also trained an image classifier model to scan products which don't have any barcodes - such as orange. However, due to time limitations we couldn't integrate it to our web app.

## What's next for Elite EATS

Change the design, add computer vision capabilities to scan more grocery items, add more items to our database, and maybe find a way to sync our app with smart fridges.

Check out the devpost of this project here: https://devpost.com/software/elite-eats

and live demo of it here: https://enganddeveloper.github.io/subwebsites/eliteeats-uofthacks7
