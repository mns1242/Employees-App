import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  public ContactID: string | null = '';
  public contact: Contact = {} as Contact;
  constructor(private ActivitedRouter: ActivatedRoute,
    private Services: ContactService) { }

  ngOnInit(): void {
    this.ActivitedRouter.paramMap.subscribe((params: ParamMap) => {
      this.ContactID = params.get('id');

      this.Services.getallContact().subscribe((data) => {

        let contact: Contact[] = data
        let selectedID = contact.find(contacts => contacts.login.uuid === this.ContactID)
        if (selectedID) {
          this.contact = selectedID
        }


      })

    })
  }

}
