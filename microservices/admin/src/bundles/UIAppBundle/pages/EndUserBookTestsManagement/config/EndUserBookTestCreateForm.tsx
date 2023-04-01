import { Service } from "@bluelibs/core";
import { EndUserBookTestCreateForm as BaseEndUserBookTestCreateForm } from "./EndUserBookTestCreateForm.base";

@Service({ transient: true })
export class EndUserBookTestCreateForm extends BaseEndUserBookTestCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
