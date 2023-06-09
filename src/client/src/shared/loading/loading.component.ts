import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['loading.component.css'],
})
export class LoadingComponent implements OnInit {
  public loading$: Observable<string> = new Observable<string>();
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loading$ = this.loadingService
      .getLoading()
      .pipe(map((loadingType) => loadingType.valueOf()));
  }
}
