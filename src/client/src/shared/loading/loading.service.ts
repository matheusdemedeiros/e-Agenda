import { Injectable } from '@angular/core';
import { Observable, Subject, startWith } from 'rxjs';

import { LoadingType } from './loading-type';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  public loadingSubject: Subject<LoadingType> = new Subject<LoadingType>();

  getLoading(): Observable<LoadingType> {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  start() {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop() {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}
