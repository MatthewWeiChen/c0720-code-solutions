
select "countries"."name",
count("c".*) as "numberOfCities"
from "countries"
join "cities" as "c" using ("countryId")
group by "countries"."countryId"
