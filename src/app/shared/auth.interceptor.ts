import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwOTgwNDE2NjYiLCJlbWFpbCI6InNlbGx5MjJmYWhhZEBnbWFpbC5jb20iLCJuYW1laWQiOiJiMmY2MGNlNC01MDY0LTRjYjMtNTNkZS0wOGRiMjE4N2RmODYiLCJDb21wYW55X0lkIjoiMGFjOTA0NDQtM2Y5OS00NWUxLTRmOGMtMDhkYzMyY2IxZjY2IiwiZXhwIjoxNzI4NDcyOTIzLCJpc3MiOiJQcml2U2VjLmNvbSIsImF1ZCI6IlByaXZTZWMuY29tIn0.Q9fFTUQdqho32zeRFxfQxJ1B9ZA4Gs6b9e5OJaIZvB4l4iR3IK0UBjxOSLtFXP38t2zGKpDhOxI-lcL0TcH7vyGoTNWiCbDvjluL-ROMh47dBOGGTgP78MAjEd3J5kbYkOPiv9YbqDVpZgLQiJBg7EkPMSRaOLJJxaZs8ErGhrc`,
      },
    });

    return next.handle(req);
  }
}
