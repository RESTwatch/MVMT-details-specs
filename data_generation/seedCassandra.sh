counter=1
while [ $counter -le 11 ]
  do
    sed -i '' s/[0-9][0-9]*/$counter/g ./seed.cql
    # cat ./seed.cql
    cqlsh -f ./seed.cql
  ((counter++))
done
