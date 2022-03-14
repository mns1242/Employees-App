import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [] as Contact[];
  public errorMSG: string | undefined;

  constructor(private contactServices: ContactService) { }

  ngOnInit(): void {
    this.contactServices.getallContact().subscribe((data) => {
      this.contacts = data
    }, (err) => {
      this.errorMSG = err;
    })
  }

}
