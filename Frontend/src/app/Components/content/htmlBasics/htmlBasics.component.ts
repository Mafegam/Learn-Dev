import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { SidebarComponent } from '../../home/sidebar/sidebar.component';
import { FooterComponent } from '../../home/footer/footer.component';
import { CommentsComponent } from '../comments/comments.component';

import { WatchLaterService } from '../../../Services/watch-later.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-htmlBasics',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, CommentsComponent, FooterComponent],
  templateUrl: './htmlBasics.component.html',
  styleUrl: './htmlBasics.component.css'
})
export class htmlBasicsComponent {
  watchLaterService = inject(WatchLaterService);
  toastrService = inject(ToastrService);

  addToList(title: string, link: string, status: boolean) {
    const list = { title, link, status }
    this.toastrService.success("Added to your list")

    this.watchLaterService.addToList(list).subscribe(() => {
      console.log();
    })
  }
}
