export enum STATUS {
  "Yes" = 1,
  "Limit" = 0,
  "Never" = -1,
}

const data = [
  {
    id: "01EW69PD56DG6J3VB3FF1DBP0X",
    food: "apple",
    status: STATUS.Yes,
    result: "Safe, but be sure to remove the seeds.",
  },
  {
    id: "01EW69PD56FN3J73F8P6ZT07NR",
    food: "carrots",
    status: STATUS.Yes,
    result:
      "Yes, both raw and cooked carrots are safe, but be sure to cut into small pieces to prevent choking.",
  },
  {
    id: "01EW69PD566VKNAE7V4DXGARA2",
    food: "grapes",
    status: STATUS.Never,
    result:
      "No, grapes contain toxic compounds and even small amounts can make your dog sick, causing kidney failure and even death.",
  },
  {
    id: "01EW69PD56JS1E9ZFZA8WMVGYB",
    food: "raisins",
    status: STATUS.Never,
    result:
      "No, raisins contain toxic compounds and even small amounts can make your dog sick, causing kidney failure and even death.",
  },
  {
    id: "01EW69PD56H8328F1XG6WF3SVE",
    food: "salt",
    status: STATUS.Limit,
    result:
      "Limit, high amounts of salt can cause fatal salt poisoning or water deprivation.",
  },
  {
    id: "01EW69PD566ZNS7VVDZ9VVC4J0",
    food: "peanut butter",
    status: STATUS.Yes,
    result:
      "Yes, plain, unsalted peanut butter is safe, but in moderation as it's high in fat and calories it could cause weight gain",
  },
  {
    id: "01EW69PD569G9W07F4V92J97WC",
    food: "cooked eggs",
    status: STATUS.Yes,
    result: "Yes, cooked eggs are both safe and nutritious for dogs.",
  },
  {
    id: "01EW69PD566TEQGRYXEHT8648Y",
    food: "raw eggs",
    status: STATUS.Never,
    result:
      "No, even if your dog doesn't get sick, they could spread the germs to you and other humans.",
  },
  {
    id: "01EW69PD56JC1J1SPFKS60JMSC",
    food: "cooked salmon",
    status: STATUS.Yes,
    result: "Yes, cooked, boneless salmon is safe and nutritious for dogs.",
  },
];

export default data;
