select "customers"."firstName",
"customers"."lastName",
"payments"."amount"
from "customers"
join "payments" using ("customerId")
order by "amount" desc
limit 10;
