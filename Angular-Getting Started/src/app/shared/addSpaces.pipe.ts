import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'AddSpaces',
})
export class AddSpaces implements PipeTransform{
  transform(val: string, char: string): string{
    return val.replace(char, ' ');
  }
}