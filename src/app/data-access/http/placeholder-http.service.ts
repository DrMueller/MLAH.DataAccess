import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpBaseService, ObjectFactoryService } from '@drmueller/ng-base-services';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderHttpService extends HttpBaseService {
  public constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService);
  }
  protected getBaseUrlAsync(): Promise<string> {
    return Promise.resolve('https://jsonplaceholder.typicode.com');
  }
}
