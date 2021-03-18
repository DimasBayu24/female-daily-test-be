docker-compose up -d postgres

WAIT_FOR_PG_ISREADY="while ! pg_isready --quiet; do sleep 1 done;"
docker-compose exec postgres bash -c "$WAIT_FOR_PG_ISREADY"

echo "running all tests"
mocha --recursive --exit

echo "tearing all down containers"
docker-compose down -v --remove-orphans