import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjE0NTQ1MjU0MTQiLCJlbWFpbCI6ImVtYW5pc21haWwxNzNAZ21haWwuY29tIiwibmFtZWlkIjoiYjFlODA3NmItZTE4ZC00NjAyLTAxMjktMDhkY2Q4YTUyYWM1IiwiQ29tcGFueV9JZCI6ImY2YWU0YmIwLWM5MmEtNGYyOC1lMWYwLTA4ZGNkODljMmZlZSIsImV4cCI6MTczNDgxNTI0MSwiaXNzIjoiUHJpdlNlYy5jb20iLCJhdWQiOiJQcml2U2VjLmNvbSJ9.VPVvvqcCttHM2wIIxNbkcIYu5_gIafGEz9MLMkCQ0tnm3laRH4v33tyyohxtaqcl58I7bH_yujCGRU9wyB-Q7P1tsKVje56o22kUjTvkFLl9XKbvJq63wnxxs-pMig5XLnYHs5doOmOteEFh8AoIpIIwMGsE0L2164NIGQon434`,
      },
    });

    return next.handle(req);
  }
}
