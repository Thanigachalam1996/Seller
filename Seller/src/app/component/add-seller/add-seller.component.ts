import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.css']
})
export class AddSellerComponent implements OnInit {
alert:boolean=false;

addSeller=new FormGroup({
     productname:new FormControl(''),
     category:new FormControl(''),
     stocks:new FormControl(''),
     price:new FormControl('')
})
  constructor(private sellerService:AppService) { }

  ngOnInit(): void {
  }

  collectSeller(){
    // this.sellerService.saveSeller(this.addSeller.value).subscribe((result) =>{
    //   console.log(this.addSeller);
    //   this.alert=true,
    //   this.addSeller.reset({})
    // })
    console.log(this.addSeller.value);
  }
  closeAlert(){
    this.alert=false;
  }

}
