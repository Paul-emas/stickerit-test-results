import { IMaterialChooserTranslations } from "./components/PricingCalculator/MaterialChooser";
import { IDimensionsTranslations } from "./components/Dimensions/Dimensions";
import { IUploadSummaryRowTranslations } from "./components/UploadSummary/UploadSummaryRow";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      MaterialChooser: IMaterialChooserTranslations;
      Dimensions: IDimensionsTranslations;
      UploadSummaryRow: IUploadSummaryRowTranslations;
    };
  }
}
