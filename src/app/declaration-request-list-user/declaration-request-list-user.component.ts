import { Component, Input } from '@angular/core';
import { DeclarationRequest } from '../declaration-request';

@Component({
  selector: 'app-declaration-request-list-user',
  templateUrl: './declaration-request-list-user.component.html',
  styleUrls: ['./declaration-request-list-user.component.css']
})
export class DeclarationRequestListUserComponent {
  @Input() declarationRequests: DeclarationRequest[];
}
