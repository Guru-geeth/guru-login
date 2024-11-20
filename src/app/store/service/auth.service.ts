import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://your-backend-api-url'; // Replace with your backend URL
  private tokenKey = 'auth-token'; // Key to store token in localStorage

  constructor(private http: HttpClient) {}

  /**
   * Login Method
   * Sends username and password to the backend to retrieve a JWT token.
   * @param username - User's username
   * @param password - User's password
   * @returns Observable of the response
   */
  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body).pipe(
      tap((response) => {
        if (response.token) {
          console.log('JWT Token:', response.token); // Print token to console
          this.storeToken(response.token); // Save token to localStorage
        } else {
          console.error('No token found in the response');
        }
      })
    );
  }

  /**
   * Stores the JWT token in localStorage.
   * @param token - The JWT token
   */
  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Retrieves the JWT token from localStorage.
   * @returns The JWT token or null if not found
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Removes the JWT token from localStorage (Logout).
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    console.log('Logged out successfully');
  }

  /**
   * Checks if the user is logged in by verifying the presence of a token.
   * @returns True if the user is logged in, otherwise false
   */
  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token; // Returns true if a token exists
  }
}
