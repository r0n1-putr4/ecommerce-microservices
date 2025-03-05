#base image
FROM node:14

#set working directory
WORKDIR /app

#copy semua pakcage json kyak package-lock.json dan package.json
COPY package*.json /app/

#install semua dependencies
RUN npm install

#copy file app.js ke /app
COPY app.js /app

#expose port 3000   
EXPOSE 3000



#run app
CMD ["node", "app.js"]