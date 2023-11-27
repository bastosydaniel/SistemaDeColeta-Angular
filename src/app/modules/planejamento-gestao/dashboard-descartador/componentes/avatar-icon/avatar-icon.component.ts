import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-avatar-icon',
  templateUrl: './avatar-icon.component.html',
  styleUrls: ['./avatar-icon.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class AvatarIconComponent {

}
