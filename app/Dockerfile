FROM node:12.16.1-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY ./package*.json ./
RUN yarn
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 8080
CMD [ "npm", "start" ]