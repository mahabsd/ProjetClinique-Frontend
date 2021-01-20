import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(doctor => {
        if (doctor.profile.name) {
          return doctor.profile.name.search(searchText) !== -1;
        }
        else{
          return doctor.username.search(searchText) !== -1;
        }
      });
    }
  }
}