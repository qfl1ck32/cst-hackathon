import { Service } from "@bluelibs/core";
import { EndUserBookListFiltersForm as BaseEndUserBookListFiltersForm } from "./EndUserBookListFiltersForm.base";

@Service({ transient: true })
export class EndUserBookListFiltersForm extends BaseEndUserBookListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
