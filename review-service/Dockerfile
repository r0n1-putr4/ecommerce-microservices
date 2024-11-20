FROM python:3.9-slim

WORKDIR /app

COPY . /app/

RUN pip install -r requirements.txt

# Install Flask directly
RUN pip install Flask

EXPOSE 3002

CMD [ "python", "app.py" ]