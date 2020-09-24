select "firstName", "lastName",
sum("payments"."amount") as "totalPaid"
from "customers"
join "payments" using ("customerId")
group by "customers"."customerId"
order by "totalPaid" desc;
