import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-from-event-example',
  templateUrl: './from-event-example.component.html',
  styleUrls: ['./from-event-example.component.scss']
})
export class FromEventExampleComponent {
  lastClick$ = fromEvent(document, 'mousedown').pipe(
    map((event: MouseEvent) => ({
      x: event.clientX,
      y: event.clientY
    })),
    startWith(<any>{})
  );

  mousePosition$ = fromEvent(document, 'mousemove').pipe(
    map((event: MouseEvent) => ({
      x: event.clientX,
      y: event.clientY
    })),
    startWith(<any>{})
  );
}
