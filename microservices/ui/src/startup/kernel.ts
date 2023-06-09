import PageLoader from "@app/components/PageLoader";
import { AppGuardian } from "@app/services/AppGuardian";
import { Kernel } from "@bluelibs/core";
import { XUINextBundle } from "@bluelibs/x-ui-next";
import { UIAppBundle } from "../bundles/UIAppBundle/UIAppBundle";
import env from "../env";

export const kernel = new Kernel({
  bundles: [
    new XUINextBundle({
      apollo: {
        client: {
          uri: env.API_URL,
        },
      },

      react: {
        initialisingComponent: PageLoader,
      },

      guardian: {
        guardianClass: AppGuardian,
        loadingComponent: PageLoader,
      },
    }),
    new UIAppBundle(),
  ],
});

export const container = kernel.container;
