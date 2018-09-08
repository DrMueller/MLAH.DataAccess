import { Injectable } from '@angular/core';
import { HttpBaseService, ObjectFactoryService } from '@drmueller/ng-base-services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderHttpService extends HttpBaseService {
  constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService, 'https://jsonplaceholder.typicode.com');
  }
}
