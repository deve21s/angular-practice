import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogapp';
   blogs = [
    {
      id : 1,
      title : "angular BIG mistake?",
      content : "angualr is a big mistake or something that make it hard to know for begginer",
      data : new Date(),
      isdone: true
    },
    {
      id : 2,
      title : "angular BIG mistake?",
      content : "angualr is a big mistake or something that make it hard to know for begginer",
      data : new Date(),
      isdone: false
    },
    {
      id : 3,
      title : "angular BIG mistake?",
      content : "angualr is a big mistake or something that make it hard to know for begginer",
      data : new Date(),
      isdone: false
    },
    {
      id : 4,
      title : "angular BIG mistake?",
      content : "angualr is a big mistake or something that make it hard to know for begginer",
      data : new Date(),
      isdone: false
    },
    {
      id : 5,
      title : "angular BIG mistake?",
      content : "angualr is a big mistake or something that make it hard to know for begginer",
      data : new Date(),
      isdone: false
    },
    {
      id : 6,
      title : "angular BIG mistake?",
      content : "angualr is a big mistake or something that make it hard to know for begginer",
      data : new Date(),
      isdone: false
    },
    {
      id : 7,
      title : "angular BIG mistake?",
      content : "angualr is a big mistake or something that make it hard to know for begginer",
      data : new Date(),
      isdone: true
    },
    {
      id : 8,
      title : "angular BIG mistake?",
      content : "angualr is a big mistake or something that make it hard to know for begginer",
      data : new Date(),
      isdone: false
    },
  ]
//[ng class ] for dynamic style
//   massage(){
//     if(this.blogs[0].id == 1){
//       return { first : true}
//     }
//     return 
//  }
  
  
  isdelete(e: any){
    console.log(e)
       // this.massage()
    this.blogs = this.blogs.filter(b => b.id != e.id)
    //  this.blogs = this.blogs.filter(blog => blog.id != data.id)  
   }
   
  }
