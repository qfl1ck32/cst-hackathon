import { Service } from "@bluelibs/core";
import { EndUserBookCreateForm as BaseEndUserBookCreateForm } from "./EndUserBookCreateForm.base";

@Service({ transient: true })
export class EndUserBookCreateForm extends BaseEndUserBookCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
