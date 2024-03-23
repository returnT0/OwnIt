import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.server.url;

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {
  }

  signIn(credentials: Credentials): Observable<any> {
    return this.http.post<any>(this.url + 'api/authentication/login', credentials, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(tap(res => {
      if (res && res.token) {
        localStorage.setItem('jwt', res.token);
      }
    }));
  }

  signUp(registrationData: any): Observable<any> {
    return this.http.post(this.url + 'api/authentication/register', registrationData, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  setToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['/landing']);
  }

  private handleAuthenticationResponse(response: any): void {
    if (response && response.token) {
      this.setToken(response.token);
      this.router.navigateByUrl('/profile');
    }
  }
}

interface Credentials {
  username: string;
  password: string;
}
