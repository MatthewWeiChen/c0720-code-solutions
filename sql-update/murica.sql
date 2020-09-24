update "countries"
set "name" = 'Murica'
where "countryId" = 103
returning *;
