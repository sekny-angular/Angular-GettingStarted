import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacePipe implements PipeTransform {
    transform(value: String,  character: string): String {
        return value.replace(character, ' ');
    }

}
