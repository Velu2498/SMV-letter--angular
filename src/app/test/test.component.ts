import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

class ModalService {
  private modals: any[] = [];

  add(modal: any) {
      // add modal to array of active modals
      this.modals.push(modal);
  }

  remove(id: string) {
      // remove modal from array of active modals
      this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
      // open modal specified by id
      let modal: any = this.modals.filter(x => x.id === id)[0];
      modal.open();
  }

  close(id: string) {
      // close modal specified by id
      let modal: any = this.modals.filter(x => x.id === id)[0];
      modal.close();
  }
}



export class TestComponent extends ModalService  implements OnInit{
  
  modalService = new ModalService;
  

  constructor( ) {
    super();
  }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
