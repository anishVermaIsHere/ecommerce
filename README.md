![alt text](image.png)

# Shop Grow - An Ecommerce Shopping App
## This is a Frontend Shopping App built with using ReactJS & Bootstrap

[**Link:1**](https://ecomm-store-22.web.app) 
[**Link:2**](https://anishvermaishere.github.io/ecomm-live/)



**Features**

1. Landing  page with Carousel

2. Product List page

3. Cart 

4. Filter Products by type, ratings

5. Search products page

6. Checkout page includes (Order summary, Shipping & Billing address)

7. Authentication with Google OAuth



**Before run this application you have to install the NodeJS**

**To run the application**

1. Download this code as zip and open visual studio code with terminal and run command 

```bash
npx create-react-app shop

```

2. Then extract the downloaded file and copy **`src`**,**`public`** folder and **`package.json`** file and paste and replace it into your app folder which you created by the command in step1.

3. After copied the files you run command 

```bash
npm i

``` 
**or**

```bash 
npm install

```

4. Now you have to create **`.env`** file into your app folder which you created, open the **`.env`** file and type the line **

```bash
REACT_APP_BASEURL=https://anish-mockapi.onrender.com/
PUBLIC_URL=https://anishvermaishere.github.io/ecomm-live/
STRIPE_PAYMENT_KEY=stripe_api_key
STRIPE_SECRET_KEY=stripe_secret_key

```
** and save it.

5. After the installation of all dependencies and environment setup. Now, you have to run last command 

```bash
npm start
```

6. Now your application will run successfully.
