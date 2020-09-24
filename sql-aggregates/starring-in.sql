select "categories"."name",
count("categories".*) as "numberOfCategories"
from "categories"
join "filmCategory" using ("categoryId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."actorId" = 178
group by "categories"."name"
