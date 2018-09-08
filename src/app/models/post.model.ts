import { IIdentifiable } from '../../../projects/drmueller/ng-data-access/src/public_api';

export class Post implements IIdentifiable {
  public id: string;
  public userId: string;
  public title: string;
  public body: string;
}
