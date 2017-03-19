# dhobi-seva-nodejs
Laundry app for Vipassana centres (on Node)
## How to run the app
#### Software requirements :
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org)
- [redis](https://redis.io)
#### Clone the repo  and install dependencies:
```bash
git clone https://github.com/nilenso/dhobi-seva-nodejs.git
cd dhobi-seva-nodejs
npm install
```
#### Update configurations
```bash
cd config
```
Update **admin_id** with the admin's mobile number in *admin.json* and set the **username** and **password** to your postgreSQL credentials in *db_settings.json*.
#### Run webpack
```bash
npm run-script build
```
#### Run tests
```bash
npm test
```
#### Run app
```bash
npm start
```
