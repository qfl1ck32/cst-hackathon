import { Service } from "@bluelibs/core";
import { BadgeCreateForm as BaseBadgeCreateForm } from "./BadgeCreateForm.base";

@Service({ transient: true })
export class BadgeCreateForm extends BaseBadgeCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
