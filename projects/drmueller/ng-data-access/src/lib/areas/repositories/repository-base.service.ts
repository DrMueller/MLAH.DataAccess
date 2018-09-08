import { HttpBaseService } from '@drmueller/ng-base-services';
import { IParameterlessConstructor } from '@drmueller/language-extensions';

import { IIdentifiable } from '../data-abstractions';
import { IRepository } from './repository.interface';

export abstract class RepositoryBaseService<TModel extends IIdentifiable> implements IRepository<TModel> {
  protected constructor(
    private httpBaseService: HttpBaseService,
    private ctor: IParameterlessConstructor<TModel>,
    protected relativeUrl: string,
  ) { }

  public async deleteAsync(id: string): Promise<void> {
    await this.httpBaseService.deleteAsync(this.relativeUrl + '/' + id);
  }

  public async loadAllAsync(): Promise<TModel[]> {
    return await this.httpBaseService.getArrayAsync<TModel>(this.relativeUrl, this.ctor);
  }

  public async loadByIdAsync(id: string): Promise<TModel> {
    return await this.httpBaseService.getAsync<TModel>(this.relativeUrl + '/' + id, this.ctor);
  }

  public async loadByIdsAsync(ids: string[]): Promise<TModel[]> {
    return await this.httpBaseService.getArrayAsync(this.relativeUrl + '/' + ids.join(','), this.ctor);
  }

  public async saveAsync(model: TModel): Promise<TModel> {
    if (!model.id) {
      return await this.httpBaseService.postAsync<TModel>(this.relativeUrl, model, this.ctor);
    } else {
      return await this.httpBaseService.putAsync<TModel>(this.relativeUrl, model, this.ctor);
    }
  }
}
