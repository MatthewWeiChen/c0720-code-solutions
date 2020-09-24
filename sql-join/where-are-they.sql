select "a"."line1",
"a"."district",
"cities"."name",
"countries"."name"
from "addresses" as "a"
join "cities" using ("cityId")
join "countries" using ("countryId")
