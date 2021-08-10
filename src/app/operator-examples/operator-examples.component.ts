import { Component, OnInit } from '@angular/core';
import {
  timer,
  pipe,
  zip,
  combineLatest,
  BehaviorSubject,
  Subject
} from 'rxjs';
import {
  map,
  scan,
  take,
  filter,
  startWith,
  takeUntil,
  switchMap,
  tap,
  skip,
  shareReplay,
  mergeMap
} from 'rxjs/operators';

const collectValues = pipe(
  scan(
    (acc, curr) =>
      [...acc, curr].filter((_, index) =>
        acc.length > 15 ? index !== 0 : true
      ),
    []
  )
);

@Component({
  selector: 'app-operator-examples',
  templateUrl: './operator-examples.component.html',
  styleUrls: ['./operator-examples.component.scss']
})
export class OperatorExamplesComponent {
  count$ = timer(0, 1000);
  manualCount$ = new BehaviorSubject(0);
  destroy$ = new Subject();

  map$ = this.count$.pipe(
    map((val: number) => val * 2),
    collectValues
  );

  filter$ = this.count$.pipe(
    filter((val: number) => val % 3 === 0),
    collectValues
  );

  takeUntil$ = this.count$.pipe(
    takeUntil(this.destroy$),
    collectValues
  );

  zip$ = zip(this.count$, this.manualCount$).pipe(collectValues);

  combineLatest$ = combineLatest(this.count$, this.manualCount$).pipe(
    collectValues
  );

  switchMap$ = this.manualCount$.pipe(
    skip(1),
    switchMap(() => this.count$),
    collectValues
  );

  mergeMap$ = this.manualCount$.pipe(
    skip(1),
    mergeMap(() => this.count$),
    collectValues
  );

  startWith$ = this.count$.pipe(
    startWith(100),
    collectValues
  );

  incrementCount(count: number) {
    this.manualCount$.next(count + 1);
  }
}
