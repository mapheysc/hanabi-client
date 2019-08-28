import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';

import { Observable, BehaviorSubject } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppService {

  loadingWatcher = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private socket: Socket,
  ) { }

  /**
   * returns a url to stream with an appended token
   * @param url the url
   * @needs [functions] http.get
   * @returns Observable<Blob>
   */
  getBlob(url: string): Observable<Blob> {
    return this.http.get(environment.apiUrl + '/' + url, { responseType: 'blob' });
  }

  /**
   * sends an http get request to the provided url
   * @param url the url to get
   * @needs [functions] http.get, loadingWatcher.next
   * @returns Observable<any> (should have a list of objects in the response)
   */
  get(url: string): Observable<any> {
    this.loadingWatcher.next(true);
    return this.http.get(environment.apiUrl + '/' + url).pipe(
      map(res => {
        this.loadingWatcher.next(false);
        return res;
      }),
      catchError(err => {
        this.loadingWatcher.next(false);
        throw (err);
      }));
  }

  /**
   * sends an http put request to the provided url with the object in the body of the request
   * @param url the url to get
   * @param obj the object to update
   * @needs [functions] http.put, loadingWatcher.next
   * @returns Observable<any> (should have the object updated in the response)
   */
  put(url: string, obj: any = {}): Observable<any> {
    this.loadingWatcher.next(true);
    return this.http.put(environment.apiUrl + '/' + url, obj).pipe(
      map(res => {
        this.loadingWatcher.next(false);
        return res;
      }),
      catchError(err => {
        this.loadingWatcher.next(false);
        throw (err);
      }));
  }

  /**
   * sends an http post request to the provided url with the object in the body of the request
   * @param url the url to get
   * @param obj the object to update
   * @needs [functions] http.post, loadingWatcher.next
   * @returns Observable<any> (should have the object created in the response)
   */
  post(url: string, obj: any): Observable<any> {
    this.loadingWatcher.next(true);
    return this.http.post(environment.apiUrl + '/' + url, obj).pipe(
      map(res => {
        this.loadingWatcher.next(false);
        return res;
      }),
      catchError(err => {
        this.loadingWatcher.next(false);
        throw (err);
      })
    );
  }

  /**
   * sends an http delete request to the provided url
   * @param url the url to delete
   * @needs [functions] http.delete, loadingWatcher.next
   * @returns Observable<any> (should have the object deleted in the response)
   */
  delete(url: string): Observable<any> {
    this.loadingWatcher.next(true);
    return this.http.delete(environment.apiUrl + '/' + url).pipe(
      map(res => {
        this.loadingWatcher.next(false);
        return res;
      }),
      catchError(err => {
        this.loadingWatcher.next(false);
        throw (err);
      }));
  }

  /**
   * retrieves a local file (typically used for json data)
   * @param url the url to get (should be a local file)
   * @needs [functions] http.get
   */
  retrieveLocalFile(url: string) {
    return this.http.get(url);
  }
  /**
   * Emits message and data to server.
   * @param eventName message to emit to server.
   * @param data data to emit to server.
   * @emits socket
   */
  emitToServer(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  /**
   * Receives message and data from server.
   * @param message message from server.
   * @needs [functions] socket.on
   * @returns Observable<any> (with the data in the emission)
   */
  onMessage(message: string): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(message, (data: any) => {
        observer.next(data);
      });
    });
  }
}
