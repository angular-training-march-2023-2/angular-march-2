import { Component, OnInit } from '@angular/core';
import { from, Observable, of, map, filter} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  startString: string = '';
  allResponse: string[] = ["RED", "BLUE", "GREEN", "BROWN"];

  // observable: Observable<string> = new Observable((observer)=>{
  //   console.log("streaming/emitting by observable started...");
  //   // here we will emit string data
  //   // observer.next("A");
  //   // observer.next("B");
  //   // observer.next("C");
  //   // observer.error(new Error("Some error has occured"));
  //   // observer.next("D");
  //   // observer.next("E");
  //   // observer.complete();
  //   setTimeout(()=>observer.next("A"), 1000);
  //   setTimeout(()=>observer.next("B"), 2000);
  //   setTimeout(()=>observer.next("C"), 3000);
  //   //setTimeout(()=>observer.error(new Error("Some error has occured")), 4000);
  //   setTimeout(()=>observer.next("D"), 4000);
  //   setTimeout(()=>observer.next("E"), 5000);
  //   setTimeout(()=>observer.complete(), 6000);
  // });

  //observable: Observable<any> = of(45, "Hello", true, this.allResponse);

  // observable: Observable<string> = from(this.allResponse);
  // myObservable: Observable<string> = this.observable.pipe<string>(map((data)=>data.toLowerCase()));

  // observable: Observable<string> = from(this.allResponse).pipe<string>(map((data)=>data.toLowerCase()));

  observable: Observable<string> = from(this.allResponse).pipe<string>(filter((data)=>data.startsWith(this.startString)));

  constructor() { }

  ngOnInit(): void {
  }

  startSubscription(){
    this.observable.subscribe({
      next: (value)=> console.log(value),
      error: (err)=> console.log(err.message),
      complete: () => console.log("streaming/emitting by observable completed...")
    });
  }

  stopSubscription(){
    
  }
}
