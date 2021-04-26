import { Component, OnInit, HostBinding} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  @HostBinding('class.bx--header') headerClass = true;

  ngOnInit(): void {
  }

}
