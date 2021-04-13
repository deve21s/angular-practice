import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blog:any
  @Output() isdelete = new EventEmitter()
  redcolor = 'green'
  constructor() { }

  ngOnInit(): void {
  }

  
  ondelete(e: any){

    // this.massage()
    //this.blogs = this.blogs.filter(b => b.id != e.id)
    // this.blogs = this.blogs.filter(blog => blog.id != data.id)  
    this.isdelete.emit(e)
   }
   visible(){
    if (this.blog.isdone === true){
      return 'visible'
    }
    return ''
  }
  ondone(e:any){
  return this.blog.isdone = !this.blog.isdone
  
  }

}
