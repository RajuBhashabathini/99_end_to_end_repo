
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Subscription, Unsubscribable, subscribeOn, of, last, take } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit, OnDestroy {

  myObs1$?: Subscription;
  myObs2$: any;
  constructor() { }

  ngOnInit(): void {

    // this.myObs1$ = interval(5000)
    //   .subscribe
    //   (value => console.log( `the numbers are unstoppable ${value}` ) );

    this.myObs2$ = of(5, 10, 15, 20, 25, 50, 75);

    this.myObs2$.subscribe(
      (val: Number) => console.log(`this is due to OF ${val}`)
    );

    from([10, 20, 30, 50]).subscribe(
      (val1: Number) => console.log(`this is due to FROM  ${val1}`)
    );

    const myobs = interval(500);
    const onlyFirstTen = myobs.pipe(
      take(6),
      last()
    );

    onlyFirstTen.subscribe(
      (val2: Number) => console.log(`only first 6 values i think ${val2}`)
    )
  };

  ngOnDestroy(): void {
    console.log('here startred destroy');

    // this.myObs1$.unsubscribe();

    // this.myObs2$.unsubscribe();
  }
}