import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService,StringService]
})
export class ChildComponent {
  CountCa : number;
  public isPrime : boolean;

 constructor(private obj : StringService , private obj1 : NumberService){
  this.CountCa = this.obj.CountCapital('This is a String with Capitals');
  this.isPrime = this.obj1.chkPrime(25);
 }
}



