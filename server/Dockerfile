FROM node:10.15.0
# 1. Creating the app directory
WORKDIR /usr/src/app
# 2. Install app dependencies for the application
# A package*.json is used to make sure the 
# package.json, package-lock.json are to be copied
COPY server/package*.json ./
# 3 RUN npm install --only=production for production
RUN npm install 
# Bundle the app source
COPY . .
CMD [ "npm", "run" , "dev" ]