#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z $POSTGRES_HOST 5432; do
    sleep 0.1
done

echo DATABASE_URL $DATABASE_URL

echo "PostgreSQL started"

python manage.py flush --no-input
python manage.py migrate

exec "$@"
