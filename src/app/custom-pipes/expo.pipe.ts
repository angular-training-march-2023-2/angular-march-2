import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo'
})
export class ExpoPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
   // console.log(args[0]);

    let ans = 1;
    for(let i=0;i<args[0];i++){
      ans = ans * value;
    }
    return ans;
  }

}
