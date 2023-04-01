import { Service } from "@bluelibs/core";
import { BadgeListFiltersForm as BaseBadgeListFiltersForm } from "./BadgeListFiltersForm.base";

@Service({ transient: true })
export class BadgeListFiltersForm extends BaseBadgeListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
