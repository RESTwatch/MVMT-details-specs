counter=1
while [ $counter -le 11 ]
  do
    sed -i '' s/[0-9][0-9]*/$counter/g ./data_generation/seed.cql
    # cat ./seed.cql
    cqlsh -f ./data_generation/seed.cql
  ((counter++))
done
