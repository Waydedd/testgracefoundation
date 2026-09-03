import type { Field } from "payload";
import { iconOptions } from "@/lib/icon-names";

export function iconField(overrides?: Partial<Field>): Field {
  return {
    name: "icon",
    type: "select",
    required: true,
    options: iconOptions,
    ...overrides,
  } as Field;
}
