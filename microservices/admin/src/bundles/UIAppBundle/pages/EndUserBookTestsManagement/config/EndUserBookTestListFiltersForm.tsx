import { Service } from "@bluelibs/core";
import { EndUserBookTestListFiltersForm as BaseEndUserBookTestListFiltersForm } from "./EndUserBookTestListFiltersForm.base";

@Service({ transient: true })
export class EndUserBookTestListFiltersForm extends BaseEndUserBookTestListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
