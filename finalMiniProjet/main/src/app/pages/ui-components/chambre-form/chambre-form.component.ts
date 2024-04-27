import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre-form',
  templateUrl: './chambre-form.component.html',
  styleUrls: ['./chambre-form.component.scss']
})
export class ChambreFormComponent {
  chambreForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private chambreService : ChambreService  , private route : Router){}

  ngOnInit(): void {
    this.chambreForm = this.formBuilder.group({
     
      numeroChambre: ['', Validators.required],
      typec: ['', [Validators.required, Validators.min(1)]]
    });

    
  }

  onSubmit() {
    if (this.chambreForm.valid) {
      // Process the form submission or data here
      console.log(this.chambreForm.value);
      this.chambreService.addChambre(this.chambreForm.value).subscribe({
        next : ()=> this.route.navigate(['main/admin/ui-components/chambre'])
      })
      

    } else {
      // Mark fields as touched to trigger validation messages
      this.chambreForm.markAllAsTouched();
    }
  }

}
