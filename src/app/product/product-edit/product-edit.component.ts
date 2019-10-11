import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder
} from '@angular/forms';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { startWith, map, tap, shareReplay, multicast, refCount } from 'rxjs/operators';
import { isEqual } from 'lodash-es';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  isEditMode = false;

  // this observable tend to use with CanDeactivate route guard
  // and because the guard will use take(1)/first, therefore we can not start stream from the beginning
  // solution 1: using Behavior Subject to track latest form state
  // isEditMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // solution 2: using shareReplay and subscribe to start stream
  isEditMode$: Observable<boolean>;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const initData = {
      data: 'some text'
    };
    this.form = this.fb.group({
      data: ''
    });

    this.form.setValue(initData);

    // solution 1: using Subject
    // this.form.valueChanges.pipe(
    //   map(v => !isEqual(initData, v))
    // ).subscribe(x => this.isEditMode$.next(x));

    // solution 2: using shareReplay + subscribe immediately
    this.isEditMode$ = this.form.valueChanges.pipe(
      map(v => !isEqual(initData, v)),
      startWith(false),
      shareReplay(1)
    );

    this.isEditMode$.subscribe(x => console.log(x));
  }

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }

}
