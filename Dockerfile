# We use the official Node.js image from Docker Hub
FROM node:20

# We set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files (if available)
COPY package*.json ./

# We install the project dependencies
RUN npm install

# We install the project dependencies
COPY . .

# We expose the port on which the application will run
EXPOSE 7003

# We define the command to run the application inside the src folder
CMD ["node", "src/app.js"]
