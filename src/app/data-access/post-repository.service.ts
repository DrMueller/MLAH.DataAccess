import { Injectable } from '@angular/core';
import { Post } from '../models';
import { RepositoryBaseService } from 'projects/drmueller/ng-data-access/src/public_api';
import { PlaceholderHttpService } from './http';

@Injectable({
  providedIn: 'root'
})
export class PostRepositoryService extends RepositoryBaseService<Post> {

  public constructor(placeHolderHttpService: PlaceholderHttpService) {
    super(placeHolderHttpService, Post, 'posts');
  }
}
