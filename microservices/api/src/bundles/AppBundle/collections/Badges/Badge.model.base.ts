/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { AppFile } from "@bluelibs/x-s3-bundle";

@Schema()
export class Badge {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(a.string().required())
  description: string;

  icon?: AppFile;

  @Is(an.objectId().nullable())
  iconId?: ObjectId;

  @Is(a.string().required())
  name: string;
}
