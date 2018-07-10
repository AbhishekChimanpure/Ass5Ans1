import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
public SubmitButton(value1,value2,value3,value4,value5,value6,value7,value8,value9)
{
  console.log(value1,value2,value3,value4,value5,value6,value7,value8,value9);
}


}
