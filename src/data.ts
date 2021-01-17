export enum STATUS {
  "yes" = "YES",
  "limit" = "LIMIT",
  "never" = "NEVER",
}

const data = [
  {
    slug: "apple",
    food: "apple",
    status: STATUS.yes,
    result: "Safe, but be sure to remove the seeds.",
  },
  {
    slug: "carrots",
    food: "carrots",
    status: STATUS.yes,
    result:
      "Yes, both raw and cooked carrots are safe, but be sure to cut into small pieces to prevent choking.",
  },
  {
    slug: "grapes",
    food: "grapes",
    status: STATUS.never,
    result:
      "No, grapes contain toxic compounds and even small amounts can make your dog sick, causing kidney failure and even death.",
  },
  {
    slug: "raisins",
    food: "raisins",
    status: STATUS.never,
    result:
      "No, raisins contain toxic compounds and even small amounts can make your dog sick, causing kidney failure and even death.",
  },
  {
    slug: "salt",
    food: "salt",
    status: STATUS.limit,
    result:
      "Limit, high amounts of salt can cause fatal salt poisoning or water deprivation.",
  },
  {
    slug: "peanut-butter",
    food: "peanut butter",
    status: STATUS.yes,
    result:
      "Yes, plain, unsalted peanut butter is safe, but in moderation as it's high in fat and calories it could cause weight gain",
  },
  {
    slug: "cooked-eggs",
    food: "cooked eggs",
    status: STATUS.yes,
    result: "Yes, cooked eggs are both safe and nutritious for dogs.",
  },
  {
    slug: "raw-eggs",
    food: "raw eggs",
    status: STATUS.never,
    result:
      "No, even if your dog doesn't get sick, they could spread the germs to you and other humans.",
  },
  {
    slug: "cooked-salmon",
    food: "cooked salmon",
    status: STATUS.yes,
    result: "Yes, cooked, boneless salmon is safe and nutritious for dogs.",
  },
];

export default data;
