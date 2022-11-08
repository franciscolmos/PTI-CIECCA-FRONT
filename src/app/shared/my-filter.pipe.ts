import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
})
export class MyFilterPipe implements PipeTransform {
    transform(value: any, filter: string): any {
        if (filter==='') {
            return value;
        }
        let result: any[]=[]
        for (const val of value) {
            if(val.firstName.toLowerCase().startsWith(filter.toLowerCase()) ||
               val.id == (filter.toLowerCase())                             ||
               val.lastName.toLowerCase().startsWith(filter.toLowerCase())  ||
               val.email.toLowerCase().startsWith(filter.toLowerCase())     ||
               val.phone.toLowerCase().startsWith(filter.toLowerCase())){
               result.push(val)
            }
        }
        return result;
    }
}