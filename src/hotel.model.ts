export type ReferenceType = "Regular" | "Fidelidade";

export type Hotel = {
  name: string;
  rating: number;
  references: Reference[];
};

export type Reference = {
  weekTax: number;
  weekendTax: number;
  type: ReferenceType;
}