import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';
import { Post } from '@shared/models/post.model';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {map} from 'rxjs/operators';
import {Stores} from '@shared/enums/common.enum';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private postURL = '/api/posts';  // URL to web api

  constructor(private http: HttpClient, private dbService: NgxIndexedDBService) { }

  getPosts(): Observable<Post[]> {
    // Will simulate backend request merging the DBStore array with the in memory API array
    return forkJoin([this.http.get<Post[]>(this.postURL), this.dbGetAllFallback(Stores.PostVoted)]).pipe(
      map(([apiPosts, dbPosts]) => apiPosts.map(post =>  dbPosts.find(p => p.id === post.id) ||  post))
    );
  }

  updatePost(post: Post) {
    /**
     * It will simulate a POST api call, it will be saved on the Indexed DB to persist the data on the browser
     * This method will check if there is a post on the DB
     *   Exist: Update
     *   Not Exist: Add
     */

    this.dbService.getByKey(Stores.PostVoted, post.id).then(dbPost => {
        if (dbPost) {
          this.dbService.update(Stores.PostVoted, post);
        } else {
          this.dbService.add(Stores.PostVoted, post);
        }
      }, error => {
        console.error(error);
      }
    );
  }

  /**
   * In order to give support to every modern browser, this fallback solves a known issue on Edge that does not allow getAll function
   * @param storeName Store name on Index DB
   */
  private dbGetAllFallback(storeName): Observable<Post[]>{
    const dbData = [];

    this.dbService.openCursor(storeName, (evt) => {
      const cursor = (evt.target as any).result;
      if (cursor) {
        dbData.push(cursor.value);
        cursor.continue();
      }
    });

    return of(dbData);
  }
}
