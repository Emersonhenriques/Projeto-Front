import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.scss']
})
export class CommentsDetailsComponent {

  comment$: any;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.comment$ = params.id));
  }

  ngOnInit() {
    this.data.getCommentDetails(this.comment$).subscribe((data: any) => (this.comment$ = data));
  }
}
