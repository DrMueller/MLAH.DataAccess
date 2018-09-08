import { Component } from '@angular/core';

import { PostRepositoryService } from './data-access';
import { Post } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts: Post[] = [];

  public constructor(private postRepository: PostRepositoryService) {
  }

  public async createPostAsync(): Promise<void> {
    const newPost = new Post();
    newPost.body = 'hello body';
    newPost.title = 'hello title';
    newPost.userId = 'mmu1234';

    this.posts = [
      await this.postRepository.saveAsync(newPost)
    ];
  }

  public async deletePostAsync(): Promise<void> {
    this.postRepository.deleteAsync('1');
  }

  public async loadAllPostsAsync(): Promise<void> {
    this.posts = await this.postRepository.loadAllAsync();
  }

  public async loadPostByIdAsync(): Promise<void> {
    this.posts = [
      await this.postRepository.loadByIdAsync('1')
    ];
  }
}
